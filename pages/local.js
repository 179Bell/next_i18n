import ja from './languages/ja'
import en from './languages/en'
import ch from './languages/ch'
export const checkLocale = (locale) => {
  if (locale === 'zh-CN') {
    return ch;
  }

  if (locale === 'en-US') {
    return en;
  }

  return ja;
}