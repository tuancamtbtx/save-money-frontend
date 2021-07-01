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
import customerApi from 'src/api/customerApi'
import { TimeColumn } from 'src/components/table-manager/columns'

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
        title: 'Họ và tên',
        dataIndex: 'full_name',
        key: 'full_name',
        render: domain => {
            return <Text fontWeight={600} content={domain} color='#57606f' />
        }
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'CMND',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Ngày Cấp',
        dataIndex: 'provided_at',
        key: 'provided_at',
        render: TimeColumn
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
        const getList = async ( ) => {
            let {data} = await customerApi.list()
            let newData = data.map((e,index) => {
                return {
                    no: index +1,
                    code: e.id_card.code,
                    provided_at: e.id_card.providedAt,
                    ...e,
                }
            })
            setData(newData)
        }
        getList()
    },[]);
    return (
        <ContentWrapper>
            <HeaderWrapper>
                <h1>Danh Sách Khách Hàng</h1>
                <CreateUserContainer />
            </HeaderWrapper>
            {/* <FilterUser /> */}
            <Table id='key' columns={columns} dataSource={data} />
        </ContentWrapper>
    )
}
export default UserContainer