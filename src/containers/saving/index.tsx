import React, { useEffect, useState } from 'react'

import Text from 'src/components/elements/text'
import RemovePermission from './remove'
import DividerComponent from 'src/components/elements/divider'
import FilterForm from './filter'
import CreatePermission from './create'
import UpdatePermission from './update'
import moment from 'moment'
import { Table, Tag } from 'antd'
import { ISaving } from 'src/types/saving'
import { ContentWrapper, HeaderWrapper } from 'src/components/wrapper'
import { TimeColumn } from 'src/components/table-manager/columns'

const time: string = moment().format('YYYY-MM-DD HH:mm:ss');
const data: ISaving[] = [
    {
        key: '1',
        customer: 'KH 1',
        type: "ong vang",
        amount: 70000000,
        createdBy: 'tuan.nguyen15',
        createdTime: time
    },
    {
        key: '2',
        customer: 'KH 2',
        type: "Co ky han",
        amount: 70000000,
        createdBy: 'tuan.nguyen15',
        createdTime: time
    },
    {
        key: '3',
        customer: 'KH 3',
        type: "Khong ky han",
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
        title: 'Loại Sổ',
        dataIndex: 'type',
        key: 'type',
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
        title: 'Số Dư',
        dataIndex: 'amount',
        key: 'amount',
        render: name => {
            return <Text color="black" isUpper={false} fontWeight={700} content={name} />
        }
    },
    {
        title: 'Created By',
        dataIndex: 'createdBy',
        key: 'createdBy',
        render: name => {
            return <Text isUpper={false} fontWeight={600} content={name} />
        }
    },
    {
        title: 'Created Time',
        dataIndex: 'createdTime',
        key: 'createdTime',
        render: TimeColumn
    },
    {
        title: 'Action',
        dataIndex: 'key',
        key: 'key',
        render: key => {
            return (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <RemovePermission />
                </div>
            )
        },
    }

];
const UserContainer: React.FC = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(data)
    });
    return (
        <ContentWrapper>
            <HeaderWrapper>
                <h1>Danh Sách Sổ Tiết Kiệm</h1>
                <CreatePermission />
            </HeaderWrapper>
            <FilterForm />
            <Table id='key' columns={columns} dataSource={users} />
        </ContentWrapper>
    )
}
export default UserContainer