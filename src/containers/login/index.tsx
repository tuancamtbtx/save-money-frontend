import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd'
import { useObserver } from "mobx-react-lite";
import redirect from 'src/utils/redirect'
import { MobXProviderContext } from 'mobx-react';
import Notification from 'src/components/elements/noitication'

const Wrapper = styled.div`
  margin-top: 240px;
  .logo {
    height: 64px;
    width: 80px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
  }
  .login-form {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .login-form-button {
    width: 100%;
  }
`

const LoginContainer: React.FC = () => {
    const {
        authStore,
    } = useContext(MobXProviderContext);
    const onFinish = async (values) => {
        await authStore.login(values)
        Notification({
            type: 'success',
            message: 'Login Success',
            description: 'Login'
        })
        localStorage.setItem('username', authStore.me.user_name)
        redirect({}, '/')
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Wrapper>
            <Form
                className='login-form'
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input
                        type='password'
                        placeholder='Password'
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' className='login-form-button'>
                        {'Log in'}
                    </Button>
                </Form.Item>

            </Form>
        </Wrapper >
    )
}

export default LoginContainer