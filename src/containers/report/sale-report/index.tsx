import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import Text from 'src/components/elements/text'
import transactionApi from 'src/api/transactionApi'
import NumberFormat from 'react-number-format';

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
		title: 'Loại Tiết Kiệm',
		dataIndex: 'name',
		key: 'name',
		render: no => {
			return <Text color="#2c3e50" isUpper={false} fontWeight={700} content={no} />
		}
	},
	{
		title: 'Tổng Thu',
		dataIndex: 'credit_money',
		key: 'credit_money',
		render: name => {
            return <NumberFormat thousandSeparator={true} prefix={'VND '} value={name} displayType={'text'} />
        }
	},
	{
		title: 'Tổng Chi',
		dataIndex: 'debit_money',
		key: 'debit_money',
		render: name => {
            return <NumberFormat thousandSeparator={true} prefix={'VND '} value={name} displayType={'text'} />
        }
	},

	{
		title: 'Chênh Lệch',
		dataIndex: 'diff_money',
		key: 'diff_money',
		render: name => {
            return <NumberFormat thousandSeparator={true} prefix={'VND '} value={name} displayType={'text'} />
        }
	},
]
const ReportContainer: React.FC = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		const getList = async () => {
			let { data } = await transactionApi.report()
			let newData = data.map((e,index)=> {
				return {
					no: index + 1,
					...e
				}
			})
			setData(newData)
		}
		getList()
	}, [])
	console.log(data)
	return (
		<>
			<Table columns={columns} dataSource={data}></Table>
		</>
	)
}
export default ReportContainer