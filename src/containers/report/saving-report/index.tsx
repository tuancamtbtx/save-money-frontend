import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { TimeColumn } from 'src/components/table-manager/columns'
import Text from 'src/components/elements/text'
import savingBookApi from 'src/api/savingBookApi'
const columns: any[] = [
	{
		title: 'STT',
		dataIndex: 'no',
		key: 'no',
		render: no => {
			return <Text color="#3498db" isUpper={false} fontWeight={700} content={no} />
		}
	},
	{
		title: 'Ngày',
		dataIndex: 'date',
		key: 'date',
		render: no => {
			return <Text color="#2c3e50" isUpper={false} fontWeight={700} content={no} />
		}
	},
	{
		title: 'Số Mở',
		dataIndex: 'totalOpen',
		key: 'totalOpen',
	},
	{
		title: 'Số Đóng',
		dataIndex: 'totalClose',
		key: 'totalClose',
	},
	{
		title: 'Chênh Lệch',
		dataIndex: 'difference',
		key: 'difference',
	},
]
const ReportContainer: React.FC = () => {
	const [data, setData] = useState([])
	function groupArrayOfObjects(list, key) {
		return list.reduce(function (rv, x) {
			(rv[x[key]] = rv[x[key]] || []).push(x);
			return rv;
		}, {});
	};
	useEffect(() => {
		const getList = async () => {
			let { data } = await savingBookApi.report()
			var groupedDate = groupArrayOfObjects(data, "date");
			let listDate:string[] = Object.keys(groupedDate)
			let newData =listDate.map((e, index)=> {
				let arr = groupedDate[e]
				let totalClose = 0;
				let totalOpen = 0;
				for(let i = 0; i < arr.length; i++){
					let item = arr[i]
					if(item.status == 1){
						totalOpen = item.total
					}else {
						totalClose = item.total
					}
				}
				return {
					no: index + 1,
					date: e,
					totalClose,
					totalOpen,
					difference: totalOpen - totalClose
				}
			})
		
			setData(newData)
		}
		getList()
	}, []);
	return (
		<>
			<Table columns={columns} dataSource={data}></Table>
		</>
	)
}
export default ReportContainer