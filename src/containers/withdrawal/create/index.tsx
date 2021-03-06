import React, { useState } from 'react'
import PermissionFrom from '../form-common'
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
      message: 'Tạo Thành Công',
      description: ' Rút tiền'
    })
  }
  const onFail = (message:string):void => {
    Notification({
      type: 'error',
      message: 'Tạo Lỗi - ' + message,
      description: ' Rút tiền'
    })
  }

  return (
    <div>
      <Modal
        visible={visible}
        showModal={showModal}
        footer={[
          <Button form="createPermssionForm" key="submit" htmlType="submit">
            {'Tạo Mới'}
          </Button>
        ]}
        handleOk={handleOk}
        handleCancel={handleCancel}
        type='primary'
        title="Tạo Mới" text="Tạo Mới"
        icon={<PlusCircleOutlined style={{ color: '#fff' }} />}
      >
        <PermissionFrom
          onSuccess={onSuccess}
          onFail={onFail}
          isUpdate={false}
          id={'createPermssionForm'} />
      </Modal>
    </div>
  )
}
export default CreateUserContainer;