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
import payslipsApi from 'src/api/payslipsApi'

const time: string = moment().format('YYYY-MM-DD HH:mm:ss');
const columns: any[] = [
    {
        title: 'Mã Sổ',
        dataIndex: 'saving_book_code',
        key: 'saving_book_code',
        render: name => {
            return <Text color="#3498db" isUpper={false} fontWeight={700} content={name} />
        }
    },
    {
        title: 'Khách Hàng',
        dataIndex: 'customer_name',
        key: 'customer_name',
        render: name => {
            return <Text color="black" isUpper={false} fontWeight={700} content={name} />
        }
    },
    {
        title: 'Ghi nợ', 
        dataIndex: 'debit_money',
        key: 'debit_money',
        render: name => {
            return <NumberFormat thousandSeparator={true} prefix={'VND '} value={name} displayType={'text'} />

        }
    },
	{
        title: 'CMND',
        dataIndex: 'customer_code',
        key: 'customer_code',
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
        dataIndex: 'id',
        key: 'id',
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
            let { data } = await payslipsApi.list()
            setData(data)
        }
        getList()
    },[]);
    return (
        <ContentWrapper>
            <HeaderWrapper>
                <h1>Danh Sách Rút Tiền</h1>
                <Create />
            </HeaderWrapper>
            {/* <FilterForm /> */}
            <Table id='key' columns={columns} dataSource={data} />
        </ContentWrapper>
    )
}
export default SavingContainer