
export const getMainApi = () => {
	// const API = process.browser ? env.default.MAIN_API_PUBLIC_URL : env.default.MAIN_API_INTERNAL_URL
	const API = "http://localhost:9090"
	const c = (path = '') => API + path
	return {
	  auth: c('/api/v1/auth')
	}
  }
  