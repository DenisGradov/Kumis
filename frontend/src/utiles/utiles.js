import locales from '@/locale';
import { languageList } from '@/constants/constants';

export function getText(activeLanguage, text) {
    const needLanguage = languageList[activeLanguage];
    const locale = locales[needLanguage];
    return locale[text] || text;
}
