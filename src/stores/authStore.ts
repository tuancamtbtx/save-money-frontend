import { observable, action } from 'mobx'
import authApi from 'src/api/authApi'
import { saveToken } from 'src/utils/auth'
import Store from './Store'

export default class AuthStore extends Store {
	@observable
	loadingState = {
		isFetchingMe: true,
		isLoginLoading: false
	}

	@observable isAuthenticated = false
	@observable token = null
	@observable me = null

	@observable
	errors = {
		login: null,
		me: null
	}

	/**
	 * Save to local
	 */
	@action
	saveToken(token) {
		saveToken(token)
		this.token = token
	}

	/**
	 * Fetch user first login
	 */
	@action
	async fetchMe(authToken) {
		this.loadingState.isFetchingMe = true
		const { data, error } = await authApi.me()
		if (error) {
			this.errors.me = data.message
			this.loadingState.isFetchingMe = false
			return false
		} else {
			this.errors.me = null
			this.me = data
			this.token = authToken
			this.isAuthenticated = true
			this.loadingState.isFetchingMe = false
			return this.me
		}
	}

	/**
	 * Login for user data
	 */
	@action
	async login({ email, password }) {
		this.loadingState.isLoginLoading = true
		const { data, error } = await authApi.login({ email, password })
		if (error) {
			this.errors.login = data.message
		} else {
			console.log(data)
			this.me = data
			this.isAuthenticated = true
			this.saveToken(data.token)
			this.errors.login = null
			this.errors.me = null
		}
		this.loadingState.isLoginLoading = false
		return data.user
	}
	@action
	async logout() {
		this.isAuthenticated = false
	}
}
