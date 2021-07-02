import React, { useState } from 'react'
import { Form, Input, InputNumber } from 'antd'
interface IProps {
    id: string,
    isUpdate?: boolean,
    onSuccess: (values) => Promise<boolean>,
    onFail: () => void
}
const dateFormat: string = 'YYYY/MM/DD';

const UserForm: React.FC<IProps> = ({ id, onSuccess, onFail }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        let check = await onSuccess(values)
        if (check) {
            form.resetFields();
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        onFail()
    };


    return (
        <Form
            form={form}
            id={id}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Tên"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}
            >
                <Input
                    style={{ width: '500px' }} />
            </Form.Item>
            <Form.Item
                label=" Tiền Gửi tối thiểu (VND)"
                name="min_amount"
                rules={[
                    {
                        required: true,
                        message: 'Please upload your Tiền Gửi tối thiểu!',
                    },
                ]}
            >
                <InputNumber
                    style={{ width: '500px' }}
                    min={0}
                    max={10000000000000000}
                />
            </Form.Item>
            <Form.Item
                label="Lãi xuất(%)"
                name="interest_rate"
                rules={[
                    {
                        required: true,
                        message: 'Please upload your Provided At!',
                    },
                ]}
            >
                <InputNumber
                    style={{ width: '500px' }}
                    min={0}
                    max={100}
                />
            </Form.Item>
            <Form.Item

                label="Kỳ hạn (Tháng)"
                name="period"
                rules={[
                    {
                        required: true,
                        message: 'Please input your address!',
                    },
                ]}
            >
                <InputNumber
                    style={{ width: '500px' }}
                />
            </Form.Item>
        </Form>

    )
}
export default UserForm