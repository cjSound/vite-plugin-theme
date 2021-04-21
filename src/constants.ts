/*
 * @Author: 曹捷
 * @Date: 2021-04-21 15:09:13
 * @LastEditors: 曹捷
 * @LastEditTime: 2021-04-21 16:03:27
 * @Description: fileContent
 */

import path from 'path';
import { normalizePath } from 'vite';

export const VITE_CLIENT_ENTRY = '/@vite/client';

export const VITE_PLUGIN_THEME_CLIENT_ENTRY = normalizePath(
  path.resolve(process.cwd(), 'node_modules/obit-vite-plugin-theme/es/')
);

export const CLIENT_PUBLIC_ABSOLUTE_PATH = normalizePath(
  VITE_PLUGIN_THEME_CLIENT_ENTRY + '/client.js'
);

export const CLIENT_PUBLIC_PATH = `/${VITE_PLUGIN_THEME_CLIENT_ENTRY}/client.js`;

export const commentRE = /\\\\?n|\n|\\\\?r|\/\*[\s\S]+?\*\//g;

const cssLangs = `\\.(css|less|sass|scss|styl|stylus|postcss)($|\\?)`;

export const colorRE = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})|rgba?\((.*),\s*(.*),\s*(.*)(?:,\s*(.*(?:.*)?))?\)/gi;

export const cssVariableString = `const css = "`;

export const cssBlockRE = /[^}]*\{[^{]*\}/g;

export const cssLangRE = new RegExp(cssLangs);
export const ruleRE = /(\w+-)*\w+:/;
export const cssValueRE = /(\s?[a-z0-9]+\s)*/;
export const safeEmptyRE = /\s?/;
export const importSafeRE = /(\s*!important)?/;

export const linkID = '__VITE_PLUGIN_THEME-ANTD_DARK_THEME_LINK__';
