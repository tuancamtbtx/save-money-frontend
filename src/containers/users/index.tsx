import React, { useEffect, useState } from 'react'
import { Table, Avatar, Tag } from 'antd'
import { IUserInfo } from 'src/types/users'
import { ContentWrapper, HeaderWrapper } from 'src/components/wrapper'
import CreateUserContainer from './create'
import RemoveUser from './remove'
import UpdateUser from './update'
import FilterUser from './filter'
import Text from 'src/components/elements/text'
import DividerComponent from 'src/components/elements/divider'
import userApi from 'src/api/userApi'
import { TimeColumn } from 'src/components/table-manager/columns'

const columns: any[] = [
    {
        title: 'STT',
        dataIndex: 'id',
        key: 'id',
        render: name => {
            return <Text color="#3498db"  fontWeight={700} content={name} />
        }
    },
    {
        title: 'Họ và tên',
        dataIndex: 'full_name',
        key: 'full_name',
        render: domain => {
            return <Text fontWeight={600} content={domain} color='#57606f' />
        }
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: name => {
            return <Text  fontWeight={500} content={name} />
        }
    },
    {
        title: 'Username',
        dataIndex: 'user_name',
        key: 'user_name',
        render: domain => {
            return <Text fontWeight={500} content={domain} color='#57606f' />
        }
    },
    {
        title: 'Ngừòi Tạo',
        dataIndex: 'created_by',
        key: 'created_by',
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
        key: '',
        render: id => {
            return (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <UpdateUser />
                    <DividerComponent type="vertical" />
                    <RemoveUser />
                </div>
            )

        },
    }

];
const UserContainer: React.FC = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let { data } = await userApi.list()
            setData(data)
        }
        getList()
    },[]);
    return (
        <ContentWrapper>
            <HeaderWrapper>
                <h1>Danh Sách Quản Trị Viên</h1>
                <CreateUserContainer />
            </HeaderWrapper>
            <FilterUser />
            <Table id='key' columns={columns} dataSource={data} />
        </ContentWrapper>
    )
}
export default UserContainer