import React from "react";
import AuthStore from './authStore'

class RootStore {
	authStore: AuthStore
	constructor() {
		this.authStore = new AuthStore(true, {})
	}
}
export const StoresContext = React.createContext(new RootStore());
export const useStores = () => React.useContext(StoresContext);

export default {
	StoresContext,
}