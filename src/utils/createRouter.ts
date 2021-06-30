// const UrlPattern = require('url-pattern')
import UrlPattern from 'url-pattern'
const REGEX_FAKE_PATH = /(\/:[a-zA-Z0-9]*)/g
const REGEX_REAL_PATH = /(=:[a-zA-Z0-9]*)/g
const REGEX_DOT_PATH = /(.:[a-zA-Z0-9]*)/g

function urlReplaceVariables (slug, variables, prefix = '', defaultEmpty = ''):void {
  var newSlug = slug
  var variablesKey = Object.keys(variables)
  variablesKey.map(function (key) {
    if (variables[key]) {
      newSlug = newSlug.replace(prefix + ':' + key, prefix + variables[key])
    }
  })
  if (prefix === '/') {
    newSlug = newSlug.replace(REGEX_FAKE_PATH, prefix + defaultEmpty)
  } else if (prefix === '.') {
    newSlug = newSlug.replace(REGEX_DOT_PATH, prefix + defaultEmpty)
  } else if (prefix === '=') {
    newSlug = newSlug.replace(REGEX_REAL_PATH, prefix + defaultEmpty)
  }
  return newSlug
}

function replacePathExpress (slug, variables) {
  const urlPatternRegex:any = new UrlPattern(slug)
  const variablesKey = urlPatternRegex.names
  variablesKey.map(function (key) {
    if (
      typeof variables[key] === 'undefined' // eslint-disable-line
    ) {
      variables[key] = 'null'
    }
  })
  return urlPatternRegex.stringify(variables).replace(/\?/g, '')
}

function routeInfo (routeConfig, variables, isFullPath = false) {
  const uAs = replacePathExpress(routeConfig.as, variables)
  const uHref = urlReplaceVariables(routeConfig.href, variables, '=', 'null')
  if (isFullPath) {
    return {
      href: uHref,
      url: uHref,
      as: uAs,
      file: routeConfig.file,
      link: () => ({
        href: uHref,
        as: uAs
      })
    }
  } else {
    return uHref
  }
}

module.exports = router => {
  const objectRouter = {}
  Object.keys(router).forEach(key => {
    objectRouter[key] = {}
    Object.keys(router[key]).forEach(childKey => {
      objectRouter[key][childKey] = (variables = {}) =>
        routeInfo(router[key][childKey], variables, true)
    })
  })
  return objectRouter
}
