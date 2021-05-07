import React, { useState } from 'react'
import Modal from 'src/components/elements/modal-normal'
import Notification from 'src/components/elements/noitication'
const RemovePermissionContainer: React.FC = () => {
  const onSubmit = async (): Promise<void> => {
    Notification({
      type: 'success',
      message: 'Retry',
      description: 'Success'
    })
  }
  const [visible, setVisible] = useState(false)
  const showModal = (): void => {
    setVisible(true)
  }
  const handleCancel = (): void => {
    setVisible(false)
  }
  const handleOk = (): void => {
    onSubmit()
    setVisible(false)
  }
  return (
    <div>
      <Modal
        visible={visible}
        showModal={showModal}
        handleCancel={handleCancel}
        handleOk={handleOk}
        type="text" title="Retry" text="Retry">
        <p>You definitely want to retry it!</p>
      </Modal>
    </div>
  )
}
export default RemovePermissionContainer;