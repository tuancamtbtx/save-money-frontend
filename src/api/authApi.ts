import axios from "src/utils/axios";
import { getMainApi } from 'src/config'

const c = (path: string = ''): string => {
	console.log(getMainApi().auth + path)
	return getMainApi().auth + path;
};

export default {
	me: (): Promise<any> => {
		return axios.get(c('/me'))
	},
	login: (data): Promise<any> => {
		return axios.post(c('/login'), data)
	}
};
