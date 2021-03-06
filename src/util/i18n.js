import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import translations from './locales';
import env from './env';

export const init = () => {
    i18n.defaultLocale = env.DEFAULT_LOCALE;
    i18n.locale = Localization.locale.split("-", 2)[0];
    i18n.fallbacks = true;
    i18n.translations = translations;
};

export default i18n;
