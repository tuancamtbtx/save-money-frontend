import React from 'react'
import redirect from 'src/utils/redirect'

const isAuthenticated = Component => {
  return class isAuthenticated extends React.Component {
    static async getInitialProps(appContext) {
      console.log(appContext)
      const isAuthenticated = appContext.mobxStores.authStore.isAuthenticated

      if (!isAuthenticated) {
        if (!process.browser) {
          redirect(appContext, '/login')
        } else {
          redirect({}, '/login')
        }
      }
      let appProps = {}
      if (Component.getInitialProps) {
        appProps = await Component.getInitialProps(appContext)
      }
      return { appProps }
    }

    render() {
      return <Component {...this.props} />
    }
  }
}

export default isAuthenticated
