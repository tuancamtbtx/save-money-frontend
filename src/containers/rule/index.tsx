import React, { useState, useEffect } from 'react'
import { ContentWrapper, HeaderWrapper } from 'src/components/wrapper'
import {Table }from 'antd'
import ruleApi from 'src/api/ruleApi'
import { TimeColumn } from 'src/components/table-manager/columns'
import Text from 'src/components/elements/text'
import DividerComponent from 'src/components/elements/divider'
import Create from './create'
import Update from './update'
import Remove from './remove'
import NumberFormat from 'react-number-format';

const columns: any[] = [
    {
        title: 'STT',
        dataIndex: 'no',
        key: 'no',
        render: name => {
            return <Text color="#3498db"  fontWeight={500} content={name} />
        }

    },
    {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
        render: domain => {
            return <Text fontWeight={700} content={domain} color='#2c3e50' />
        }
    },
    {
        title: 'Tiền Gửi tối thiểu',
        dataIndex: 'min_amount',
        key: 'min_amount',
		render: money => {
            return <NumberFormat thousandSeparator={true} prefix={'VND '} value={money} displayType={'text'} />
        }
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
                    <Update />
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
				<Create />
			</HeaderWrapper>
			<Table id='key' columns={columns} dataSource={data} />

		</ContentWrapper>
	)

}
export default RuleContainer
