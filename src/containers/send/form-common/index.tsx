import React, { useState } from 'react'
import { Form, Input, InputNumber } from 'antd'
import receiptApi from 'src/api/receiptApi'
interface IProps {
  id: string,
  isUpdate?: boolean,
  initValue?: any,
  onSuccess: () => void,
  onFail: () => void
}


const PermissionForm: React.FC<IProps> = ({ onSuccess, onFail, id, isUpdate, initValue }) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    let { data, error } = await receiptApi.save(values)
    if (error) {
      onFail()
    } else {
      form.resetFields();
      onSuccess()
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    onFail()
  };

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
        name="saving_book_code"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="CMND Khách hàng"
        name="customer_code"
        rules={[
          {
            required: true,
            message: 'Please input your name permission!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Số tiền"
        name="credit_money"
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