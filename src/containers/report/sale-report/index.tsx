import React from 'react'
import { Table } from 'antd'
import { TimeColumn } from 'src/components/table-manager/columns'
import Text from 'src/components/elements/text'

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
		title: 'Tổng Thu',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: 'Tổng Chi',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: 'Loại Tiết Kiệm',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: 'Chênh Lệch',
		dataIndex: 'no',
		key: 'no',
	},
]
const ReportContainer: React.FC = () => {
	return (
		<>
			<Table columns={columns} dataSource={[]}></Table>
		</>
	)
}
export default ReportContainer