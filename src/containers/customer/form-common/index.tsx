import React, { useState } from 'react'
import { Form, Input } from 'antd'
import { IOptionSelect } from 'src/types/shared'
import Select from 'src/components/elements/select'
import { DatePicker, Space } from 'antd';
import moment from 'moment'
import customerApi from 'src/api/customerApi'
interface IProps {
    id: string,
    isUpdate?: boolean,
    onSuccess: () => void,
    onFail: () => void
}
const dateFormat: string = 'YYYY/MM/DD';

const UserForm: React.FC<IProps> = ({ id, onSuccess, onFail }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        values['provided_at'] = moment(values.provided_at).unix()
        console.log('Success:', values);
        let body = {
            fullName: values.fullName,
            idCard: {
                id: values.cmnd,
                providedAt: values.provided_at
            }
        }
        let { data, error } = await customerApi.save(body);
        console.log(data)
        if(error){
            onFail()
        }
        onSuccess()
        form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        onFail()
    };

    const listStatus: IOptionSelect[] = [
        {
            key: '1',
            value: 'APPROVE',
            name: 'APPROVE'
        },
        {
            key: '2',
            value: 'REJECTED',
            name: 'REJECTED',
        }
    ]
    const [status] = useState(listStatus)
    return (
        <Form
            form={form}
            id={id}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Họ và tên"
                name="fullName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your fullname!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label=" Số CMND"
                name="cmnd"
                rules={[
                    {
                        required: true,
                        message: 'Please upload your Avatar!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Ngày cấp CMND"
                name="provided_at"
                rules={[
                    {
                        required: true,
                        message: 'Please upload your Provided At!',
                    },
                ]}
            >
                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
            </Form.Item>
            <Form.Item
                label="Địa chỉ"
                name="fullName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your address!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </Form>

    )
}
export default UserForm