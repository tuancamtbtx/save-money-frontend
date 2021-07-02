import React, { useState } from 'react'
import UserFrom from '../form-common'
import Modal from 'src/components/elements/modal-footer'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Notification from 'src/components/elements/noitication'
import ruleApi from 'src/api/ruleApi'

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
    const onSuccess = async (values: any): Promise<boolean> => {
        let { data, error } = await ruleApi.save(values);
        if (error) {
            onFail()
            return false
        } else {
            setVisible(false)
            Notification({
                type: 'success',
                message: 'Tạo thành công',
                description: 'Gói tiết kiệm'
            })
            return true
        }
    }
    const onFail = () => {
        Notification({
            type: 'error',
            message: 'Tạo thất bại',
            description: 'Gói tiết kiệm'
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
                <div style={{ textAlign: 'center' }}>
                    <UserFrom
                        onSuccess={onSuccess}
                        onFail={onFail}
                        id={'createForm'}
                    />
                </div>

            </Modal>
        </div>
    )
}
export default CreateUserContainer;