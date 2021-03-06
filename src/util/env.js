import {
  BASE_URL,
  VARIANT,
  VERSION,
  QR_CODE_PATTERN,
  QR_CODE_CONTENT,
  DEFAULT_LOCALE
} from 'react-native-dotenv';

export default {
  BASE_URL,
  VARIANT: VARIANT ? VARIANT : 'customer',
  VERSION,
  QR_CODE_PATTERN,
  QR_CODE_CONTENT,
  DEFAULT_LOCALE
};
