import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import de from './locales/de.i18n';

i18n.defaultLocale = process.env.DEFAULT_LOCALE;
i18n.locale = Localization.locale;
i18n.fallbacks = true;
i18n.translations = {
  de: de
};

export default i18n;
