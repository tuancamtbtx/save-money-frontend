import React, { useState } from 'react'
import { Form, Input, InputNumber } from 'antd'
import { IOptionSelect } from 'src/types/shared'
import Select from 'src/components/elements/select'
interface IProps {
  id: string,
  isUpdate?: boolean,
  initValue?: any,
  onSuccess: () => void,
  onFail: () => void
}

const listTypeSaving: IOptionSelect[] = [
  {
    key: '1',
    value: '1',
    name: 'Không kỳ hạn'

  },
  {
    key: '2',
    value: '2',
    name: '3 tháng'
  }, {
    key: '3',
    value: '3',
    name: '6 tháng'
  }

]
const listStatus: IOptionSelect[] = [
  {
    key: '1',
    value: 'Active',
    name: 'Active'
  },
  {
    key: '2',
    value: 'InActive',
    name: 'InActive',
  }
]
const PermissionForm: React.FC<IProps> = ({ onSuccess, onFail, id, isUpdate, initValue }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    form.resetFields();
    onSuccess()
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    onFail()
  };


  const [status] = useState(listStatus)
  return (
    <Form
      form={form}
      initialValues={initValue}
      id={id}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Mã Sổ"
        name="code"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Khách hàng"
        name="user"
        rules={[
          {
            required: true,
            message: 'Please input your name permission!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Số tiền"
        name="money"
        rules={[
          {
            required: true,
            message: 'Please input your status!',
          },
        ]}
      >
        <InputNumber
          style={{
            width: 200,

          }}
        />
      </Form.Item>
    </Form>

  )
}
export default PermissionForm