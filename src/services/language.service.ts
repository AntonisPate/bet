import Languages from "../interfaces/languages.interface";

//Collects all the languages for a sport
//Param sport string
//Returns Languages
export default function allLanguages(sport: string): Languages {
    let data = {
        en: global.i18n.getCatalog('en')[sport] as string,
        de: global.i18n.getCatalog('de')[sport] as string,
        zh: global.i18n.getCatalog('zh')[sport] as string
    }
    return data;
}