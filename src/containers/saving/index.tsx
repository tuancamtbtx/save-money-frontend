import React, { useEffect, useState } from 'react'

import Text from 'src/components/elements/text'
import Remove from './remove'
import FilterForm from './filter'
import Create from './create'
import Update from './update'
import moment from 'moment'
import { Table, Tag } from 'antd'
import { ISaving } from 'src/types/saving'
import { ContentWrapper, HeaderWrapper } from 'src/components/wrapper'
import { TimeColumn } from 'src/components/table-manager/columns'
import NumberFormat from 'react-number-format';
import savingBookApi from 'src/api/savingBookApi'
const time: string = moment().format('YYYY-MM-DD HH:mm:ss');
const columns: any[] = [
    {
        title: 'Mã Sổ',
        dataIndex: 'id',
        key: 'id',
        render: name => {
            return <Text color="#3498db" isUpper={false} fontWeight={700} content={name} />
        },
    },
   
    {
        title: 'Khách Hàng',
        dataIndex: 'customer_name',
        key: 'customer_name',
        render: name => {
            return <Text color="black" isUpper={false} fontWeight={700} content={name} />
        },
        width: 200
    },
    {
        title: 'Loại Sổ',
        dataIndex: 'type',
        key: 'type',
        render: status => {
            if (status === 1) {
                return <Tag color="#3498db">KHÔNG THỜI HẠN</Tag>
            } else if (status === 2) {
                return <Tag color="#2ecc71">3 THÁNG</Tag>
            } else if (status === 3) {
                return <Tag color="#9b59b6">6 THÁNG</Tag>
            } else  {
                return <Tag color="#2ecc71">UNKNOWN</Tag>
            }
        },
        width: 150,
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Số Dư',
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
                    <Remove />
                </div>
            )
        },
    }

];
const SavingContainer: React.FC = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let { data } = await savingBookApi.list()
            setData(data)
        }
        getList()
    },[]);
    return (
        <ContentWrapper>
            <HeaderWrapper>
                <h1>Danh Sách Sổ Tiết Kiệm</h1>
                <Create />
            </HeaderWrapper>
            <FilterForm />
            <Table id='key' columns={columns} dataSource={data} />
        </ContentWrapper>
    )
}
export default SavingContainer