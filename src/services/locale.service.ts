//Changes the lacale of the i18n
//Param: lang string the language code
export default function changeLocale (lang: string): void {
    if (lang) {
        global.i18n.setLocale(lang)
    } else {
        global.i18n.setLocale('en')
    }
}