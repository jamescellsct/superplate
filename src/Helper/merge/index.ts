import path from "path";
import { readFile } from "fs";
import merge from "deepmerge";
import { promisify } from "util";

type PkgType = Record<string, unknown>;

type PkgFnType = {
    apply: (pkg: PkgType, answers: string[]) => Record<string, unknown>;
};

type MergerFn = (
    base: Record<string, unknown>,
    pluginsPath: string,
    plugins: string[],
    fileName: string,
) => Record<string, unknown>;

type PackageMergerFn = (
    base: Record<string, unknown>,
    pluginsPath: string,
    plugins: string[],
) => Record<string, unknown>;

type AsyncMergerFn = (
    base: Record<string, unknown>,
    pluginsPath: string,
    plugins: string[],
) => Promise<Record<string, unknown>>;

const getPluginFile: <ReturnType extends any>(
    pluginPath: string,
    pluginName: string,
    fileName: string,
) => ReturnType | undefined = (pluginPath, pluginName, fileName) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const pluginFile = require(path.join(
            pluginPath,
            "plugins",
            pluginName,
            fileName,
        ));

        return pluginFile;
    } catch (e) {
        return undefined;
    }
};

const getStringFile = async (
    pluginPath: string,
    pluginName: string,
    fileName: string,
) => {
    try {
        const str = await promisify(readFile)(
            path.join(pluginPath, "plugins", pluginName, fileName),
            "utf8",
        );
        if (typeof str === "string") {
            return str;
        } else {
            return "{}";
        }
    } catch (e) {
        return "{}";
    }
};

export const mergeJSONFiles: MergerFn = (
    base = {},
    pluginsPath,
    plugins,
    fileName,
) => {
    const baseFile = { ...base };
    const pluginFiles = plugins.map((plugin) => {
        const file = getPluginFile<PkgType>(pluginsPath, plugin, fileName);
        return file ?? {};
    });
    return merge.all([baseFile, ...pluginFiles]) as Record<string, unknown>;
};

export const mergeBabel: AsyncMergerFn = async (base, pluginsPath, plugins) => {
    const baseBabel = { ...base };

    const pluginRcs = await plugins.map(async (plugin) => {
        const str = await getStringFile(pluginsPath, plugin, ".babelrc");
        const parsed = JSON.parse(str);

        return parsed ?? {};
    });

    const merged = merge.all([baseBabel, ...pluginRcs]) as Record<
        string,
        unknown
    >;

    const uniquePresets: string[] = [];
    const presetsSet = new Set((merged.presets as string[]) ?? []);
    presetsSet.forEach((el) => uniquePresets.push(el));
    merged.presets = uniquePresets;

    return merged;
};

export const mergePackages: PackageMergerFn = (
    base = {},
    pluginsPath,
    plugins,
) => {
    const basePkg = { ...base };
    const pluginPkgs = plugins.map((plugin) => {
        const pluginPkg = getPluginFile<PkgType>(
            pluginsPath,
            plugin,
            "package.json",
        );
        const pluginPkgFn = getPluginFile<PkgFnType>(
            pluginsPath,
            plugin,
            "package.js",
        );

        if (pluginPkgFn && pluginPkg) {
            const fnPkg = pluginPkgFn.apply(pluginPkg, plugins);
            return fnPkg;
        } else if (pluginPkg) {
            return pluginPkg;
        }
        return {};
    });

    return merge.all([basePkg, ...pluginPkgs]) as Record<string, unknown>;
};