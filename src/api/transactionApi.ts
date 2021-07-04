import axios from "src/utils/axios";
import { getMainApi } from 'src/config'


const c = (path: string = ''): string => {
	return getMainApi().transaction + path;
};

export default {
	// list: (): Promise<any> => {
	// 	return axios.get(c('/'))
	// },
	// save: (data): Promise<any> => {
	// 	return axios.post(c('/'), data)
	// },
	report: (): Promise<any> => {
		return axios.get(c('/report'))

	}
};
