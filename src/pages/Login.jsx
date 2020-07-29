import React, { Component } from 'react'

import { Layout } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';

//引入
import {inject,observer} from 'mobx-react'


const { Header, Footer,  Content } = Layout;

@inject('user')

@observer   //* 概念: 监听store的变化, 同时更新视图的变化
class login extends Component {
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        const onFinish = values => {
            console.log('Success:', values);
            this.props.user.Login()
                .then(data=>{
                    alert(data);    
                    this.props.history.push('/index');
                })
                .catch(err=>{
                    console.log(err); 
                });
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        
        return (
            <div>
                <Layout>
                        <Header>班级管理系统</Header>
                        <Content>
                            {/*登录页的内容*/}
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: '请输入用户名!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: '请输入密码!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Content>
                        <Footer></Footer>
                    </Layout>
            </div>
        )
    }
}
export default login;