import React from 'react'
import './index.css'
import storeUser from '../../utils/storeUser'
import {Form,Input,Icon,Button} from 'antd'
const Item = Form.Item
class Login extends React.Component{
    handleSubmit= e =>{
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if(!err){
                const {username} = values
                storeUser.saveUser(username)
                this.props.history.replace('/')
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className='login'>
                <h1>mango后台管理系统</h1>
                <Form onSubmit={this.handleSubmit} className='login-form'>
                    <Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' },
                                { min:4, message: '用户名最小是4位数' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Item>
                    <Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Item>
                    <Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Item>
                </Form>
            </div>
        )
    }
}
const LoginWrap = Form.create()(Login)
export default LoginWrap

