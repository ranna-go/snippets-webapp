export interface LanguageInfo {
  type: string;
  color: string;
  extensions: string[];
  tm_scope: string;
  ace_mode: string;
  language_id: number;
}

export type LanguageMap = { [key: string]: LanguageInfo };

let languageInfo: LanguageMap = {};

const aliasMap: { [key: string]: string } = {
  'openjdk-11': 'java',
  deno: 'typescript',
  mono: 'csharp',
  'dotnet-script': 'csharp',
  'kotlin-script': 'kotlin',
};

async function init() {
  const res = await window.fetch(process.env.languagesEndpoint);
  languageInfo = (await res.json()) as LanguageMap;
}

export function languageColor(lang: string): string {
  lang = lang.toLowerCase();
  lang = aliasMap[lang] ?? lang;
  return languageInfo[lang]?.color ?? '#ffffff';
}

export default {
  init,
};
