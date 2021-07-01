import React, { useState, useEffect } from 'react'
import { Form, Input, InputNumber } from 'antd'
import { IOptionSelect } from 'src/types/shared'
import Select from 'src/components/elements/select'
import savingBookApi from 'src/api/savingBookApi'
import ruleApi from 'src/api/ruleApi'
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
  const onFinish = async (values) => {
    let { data, error } = await savingBookApi.save(values);
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
  const [isLoaded, setLoaded] = useState(false)
  const [data, setData] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let { data } = await ruleApi.list()
      let newData = data.map((e, index) => {
        return {
          key: e.id,
          value: e.id,
          name: e.name
        }
      })
      setData(newData)
      setLoaded(true)
    }
    getList()
  }, []);

  return (
    <div>
      {isLoaded && <Form
      form={form}
      initialValues={initValue}
      id={id}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="CMND Khách hàng"
        name="id_card"
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
        label="Loại sổ tiết kiệm"
        name="type"
        rules={[
          {
            required: true,
            message: 'Loại sổ tiết kiệm',
          },
        ]}
      >
        <Select
          defaultValue={isUpdate ? initValue.type : null}
          placeholder="Chọn sổ"
          list={data}
        />
      </Form.Item>
      <Form.Item
        label="Số tiền"
        name="amount"
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
    </Form>}
    </div>
    
  )
}
export default PermissionForm