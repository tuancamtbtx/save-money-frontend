import React, { useEffect, useState } from 'react'

import Text from 'src/components/elements/text'
import FilterForm from './filter'
import Create from './create'
import Update from './update'
import moment from 'moment'
import { Table, Tag } from 'antd'
import { ISaving } from 'src/types/saving'
import { ContentWrapper, HeaderWrapper } from 'src/components/wrapper'
import { TimeColumn } from 'src/components/table-manager/columns'
import NumberFormat from 'react-number-format';
import receiptApi from 'src/api/receiptApi'
const time: string = moment().format('YYYY-MM-DD HH:mm:ss');
const data: ISaving[] = [
    {
        key: '1',
        customer: 'KH 1',
        type: "Không kỳ hạn",
        amount: 70000000,
        createdBy: 'tuan.nguyen15',
        createdTime: time
    },
    {
        key: '2',
        customer: 'KH 2',
        type: "3 tháng",
        amount: 70000000,
        createdBy: 'tuan.nguyen15',
        createdTime: time
    },
    {
        key: '3',
        customer: 'KH 3',
        type: "6 tháng",
        amount: 340000000,
        createdBy: 'tuan.nguyen15',
        createdTime: time
    },


];
const columns: any[] = [
    {
        title: 'Mã Sổ',
        dataIndex: 'key',
        key: 'key',
        render: name => {
            return <Text color="#3498db" isUpper={false} fontWeight={700} content={name} />
        }
    },
    {
        title: 'Khách Hàng',
        dataIndex: 'customer',
        key: 'customer',
        render: name => {
            return <Text color="black" isUpper={false} fontWeight={700} content={name} />
        }
    },
    {
        title: 'Số Tiền',
        dataIndex: 'amount',
        key: 'amount',
        render: name => {
            return <NumberFormat thousandSeparator={true} prefix={'VND '} value={name} displayType={'text'} />

        }
    },
    {
        title: 'Ngừòi Tạo',
        dataIndex: 'created_by',
        key: 'created_by',
        render: name => {
            return <Text isUpper={false} fontWeight={600} content={name} />
        }
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'created_at',
        key: 'created_at',
        render: TimeColumn
    },
    {
        title: '',
        dataIndex: 'key',
        key: 'key',
        render: key => {
            return (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                </div>
            )
        },
    }

];
const SavingContainer: React.FC = () => {
	const [data, setData] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let { data } = await receiptApi.list()
            setData(data)
        }
        getList()
    },[]);
    return (
        <ContentWrapper>
            <HeaderWrapper>
                <h1>Danh Sách Gửi Tiền</h1>
                <Create />
            </HeaderWrapper>
            <FilterForm />
            <Table id='key' columns={columns} dataSource={data} />
        </ContentWrapper>
    )
}
export default SavingContainer