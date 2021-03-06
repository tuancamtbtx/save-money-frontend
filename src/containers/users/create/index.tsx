import React, { useState } from 'react'
import UserFrom from '../form-common'
import Modal from 'src/components/elements/modal-footer'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Notification from 'src/components/elements/noitication'
const CreateUserContainer: React.FC = () => {

    const [visible, setVisible] = useState(false)
    const showModal = (): void => {
        setVisible(true)
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const handleOk = () => {
        setVisible(false)
    }
    const onSuccess = (): void => {
        setVisible(false)
        Notification({
            type: 'success',
            message: 'Tạo mới Thành Công',
            description: 'Quản Trị Viên'
        })
    }
    const onFail = () => {
        Notification({
            type: 'error',
            message: 'Tạo Mới Thất Bại',
            description: 'Quản Trị Viên'
        })
    }
    return (
        <div>
            <Modal
                visible={visible}
                showModal={showModal}
                footer=
                {[
                    <Button type='primary' form="createForm" key="submit" htmlType="submit">
                        {'Tạo'}
                    </Button>
                ]}
                handleOk={handleOk}
                handleCancel={handleCancel}
                icon={<PlusCircleOutlined style={{ color: '#fff' }} />}
                type="primary" title="Tạo Mới" text="Tạo Mới">
                <UserFrom
                    onSuccess={onSuccess}
                    onFail={onFail}
                    id={'createForm'}
                />
            </Modal>
        </div>
    )
}
export default CreateUserContainer;