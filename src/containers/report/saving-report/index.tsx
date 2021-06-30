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
		title: 'Ngày',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: 'Số Mở',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: 'Số Đóng',
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