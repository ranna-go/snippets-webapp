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

(async () => {
  const res = await window.fetch(process.env.languagesEndpoint);
  languageInfo = (await res.json()) as LanguageMap;
})();

export function languageColor(lang: string): string {
  return languageInfo[lang.toLowerCase()]?.color ?? '#ffffff';
}
