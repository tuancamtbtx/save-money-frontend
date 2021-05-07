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
const data: IUserInfo[] = [
    {
        key: '1',
        name: 'Nguyễn Văn Tuấn',
        status: 'Approve',
        domain: 'tuan.nguyen15',
    },
];
const columns: any[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: name => {
            return <Text color="#3498db" isUpper={true} fontWeight={700} content={name} />
        }

    },
    {
        title: 'Username',
        dataIndex: 'domain',
        key: 'domain',
        render: domain => {
            return <Text fontWeight={600} content={domain} color='#57606f' />
        }
    },
    {
        title: 'Avatar',
        dataIndex: 'url_avatar',
        key: 'url_avatar',
        render: avatar => {
            return (
                <div>
                    <Avatar shape="square" size={64} />
                </div>
            )

        }
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: status => {
            if (status === "Approve") {
                return <Tag color="#1e90ff">{status}</Tag>
            } else {
                return <Tag color="#f50">{status}</Tag>
            }

        },
    },
    {
        title: 'Action',
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
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(data)
    });
    return (
        <ContentWrapper>
            <HeaderWrapper>
                <h1>List Users</h1>
                <CreateUserContainer />
            </HeaderWrapper>
            <FilterUser />
            <Table id='key' columns={columns} dataSource={users} />
        </ContentWrapper>
    )
}
export default UserContainer