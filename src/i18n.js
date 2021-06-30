const NextI18Next = require('next-i18next').default

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'vi',
  otherLanguages: ['en'],
  localeSubpaths: {
    vi: 'vi',
    en: 'en'
  },
  localePath: 'locales',
  defaultNS: 'common'
})

module.exports = NextI18NextInstance

module.exports.appWithTranslation = NextI18NextInstance.appWithTranslation
module.exports.withTranslation = NextI18NextInstance.withTranslation
module.exports.i18n = NextI18NextInstance.i18n
module.exports.useTranslation = NextI18NextInstance.useTranslation
module.exports.Link = NextI18NextInstance.Link
module.exports.Router = NextI18NextInstance.Router
