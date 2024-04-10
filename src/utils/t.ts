import { i18n } from 'locales/i18n';

/**
 * Asynchronously gets a translation. Ensure i18n is initialized before calling.
 * @param {string} key The key for the translation.
 * @param {object} [options={}] Options for the translation.
 * @returns {Promise<string>} A promise that resolves to the translated string.
 */
export function t(key, options = {}) {
  return i18n.t(key, options);
}
