import * as React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Component } from 'react'
import Login, { Color } from 'src/types';
import './Login.css'


export default class Counter extends Component<Login.loginSumitProps> {

    onFinish = (values) => {
        console.log('Success:', values);
        this.props.getSumit(values)
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };




    render() {
        return (
            <div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 3,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 3,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 3,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>)

    }
}