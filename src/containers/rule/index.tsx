import React, { useState, useEffect } from 'react'
import { ContentWrapper, HeaderWrapper } from 'src/components/wrapper'
import {Table }from 'antd'
import ruleApi from 'src/api/ruleApi'
import { TimeColumn } from 'src/components/table-manager/columns'
import Text from 'src/components/elements/text'

const columns: any[] = [
    {
        title: 'STT',
        dataIndex: 'no',
        key: 'no',
        render: name => {
            return <Text color="#3498db"  fontWeight={700} content={name} />
        }

    },
    {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
        render: domain => {
            return <Text fontWeight={600} content={domain} color='#57606f' />
        }
    },
    {
        title: 'Tiền Gửi tối thiểu',
        dataIndex: 'min_amount',
        key: 'min_amount',
    },
    {
        title: 'Lãi xuất(%)',
        dataIndex: 'interest_rate',
        key: 'interest_rate',
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'created_at',
        key: 'created_at',
        render: TimeColumn
    },
    {
        title: 'Action',
        dataIndex: 'id',
        key: '',
        render: id => {
            return (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {/* <UpdateUser />
                    <DividerComponent type="vertical" />
                    <RemoveUser /> */}
                </div>
            )

        },
    }

];
const RuleContainer: React.FC = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getList = async () => {
		    let { data } = await ruleApi.list()
		    setData(data)
			let newData = data.map((e,index) => {
                return {
                    no: index +1,
                    ...e,
                }
            })
            setData(newData)
		}
		getList()
	}, []);
	return (
		<ContentWrapper>
			<HeaderWrapper>
				<h1>Danh Sách Qui Định</h1>
			</HeaderWrapper>
			<Table id='key' columns={columns} dataSource={data} />

		</ContentWrapper>
	)

}
export default RuleContainer
