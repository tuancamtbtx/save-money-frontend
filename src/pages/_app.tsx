import React from 'react'
import App from 'next/app'
import ErrorPage from 'src/components/error'
import { Provider } from 'mobx-react'
// import { autorun, toJS } from 'mobx'
import { setGlobalHeaders, setGlobalAuthToken } from 'src/utils/axios'
import { getToken } from 'src/utils/auth'
import { initializeStores } from 'src/stores'
import { createGlobalStyle } from 'styled-components'

import color from 'src/theme/color'
import Color from 'color'
import "src/styles/antd.css";
import 'src/assets/style.scss'
import Router from 'next/router'

const NProgressColor = Color(color.SHAPE.PRIMARY).lighten(0.3).toString()

const GlobalStyle = createGlobalStyle`
  #nprogress .bar {
    background: ${NProgressColor};
  }
  #nprogress .peg {
    box-shadow: 0 0 10px ${NProgressColor}, 0 0 5px ${NProgressColor};
  }
  #nprogress .spinner-icon {
    border-top-color: ${NProgressColor};
    border-left-color: ${NProgressColor};
  }
`
declare var localStorage: any;

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  static async getInitialProps(appContext) {
    const mobxStores: any = initializeStores()
    appContext.ctx.mobxStores = mobxStores

    const isAuthenticated = mobxStores.authStore.isAuthenticated
    if (!process.browser) {
      const { host, ...headers } = appContext.ctx.req.headers
      setGlobalHeaders({ headers, origin: host })
    }
    if (!process.browser && !isAuthenticated) {
      const authToken = getToken(appContext.ctx.req)
      if (authToken) {
        setGlobalAuthToken(authToken)
        await mobxStores.authStore.fetchMe(authToken)
      }
    }
    appContext.ctx.mobxStores = mobxStores
    appContext.ctx.isAuthenticated = mobxStores.authStore.isAuthenticated
    let appProps: any = {}
    if (App.getInitialProps) {
      appProps = await App.getInitialProps(appContext)
    }
    if (appProps.statusCode && appContext.res) {
      appContext.res.statusCode = appProps.statusCode
    }
    return {
      ...appProps,
      initialMobxStores: mobxStores
    }
  }
  mobxStores: any
  constructor(props) {
    super(props)
    const isServer = typeof window === 'undefined'
    this.mobxStores = isServer
      ? props.initialMobxStores
      : initializeStores(props.initialMobxStores)
  }
  componentDidMount() {
    let { initialMobxStores }: any = this.props
    if (initialMobxStores) {
      if (!initialMobxStores.authStore.isAuthenticated) {
        Router.push("/login");
      }else{
        localStorage.setItem('username', initialMobxStores.authStore.me.user_name)  
      }
    }
  }
  render() {
    const { Component, pageProps } = this.props
    if (pageProps.statusCode) {
      return <ErrorPage statusCode={pageProps.statusCode} />
    }
    return (
      <Provider {...this.mobxStores}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default (MyApp)

