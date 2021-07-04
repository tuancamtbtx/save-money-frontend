
export const getMainApi = () => {
	// const API = process.browser ? env.default.MAIN_API_PUBLIC_URL : env.default.MAIN_API_INTERNAL_URL
	const API = "http://localhost:9090"
	const c = (path = '') => API + path
	return {
	  auth: c('/api/v1/auth'),
	  customer: c('/api/v1/customers'),
	  users: c('/api/v1/users'),
	  receipts: c('/api/v1/receipts'),
	  savingBook: c('/api/v1/saving-books'),
	  payslips: c('/api/v1/payslips'),
	  rule: c('/api/v1/rules'),
	  transaction: c('/api/v1/transactions')

	}
  }
  