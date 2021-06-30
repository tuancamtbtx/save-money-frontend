import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
const FilterForm: React.FC = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="ant-table-wrapper">
            <Form
                layout="inline"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"
                >
                    <Input style={{width: '400px'}} placeholder="Email" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" >
                        {'Tìm kiếm'}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default FilterForm;