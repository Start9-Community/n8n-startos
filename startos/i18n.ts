import { translations } from "./i18n/translations"
import { defaultStrings, StringKey } from "./i18n/default"

// Simple i18n helper - returns the string for the current locale
// StartOS will call this with the user's locale
export function i18n(key: StringKey): string {
  // For now, always return English
  // StartOS SDK handles locale selection at a higher level
  return defaultStrings[key] ?? key
}
