import React from 'react'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import storageUtils from '../../utils/storageUtils'
import LeftNav from '../../components/leftNav/leftNav'
const { Header, Footer, Sider, Content } = Layout;
export default class Admin extends React.Component{
    render(){
        const user = storageUtils.getUser()
        if(!user || JSON.stringify(user)==='{}'){
            return <Redirect to='/login'/>
        }
        return(
            <Layout style={{height:'100%'}}>
                <Sider><LeftNav></LeftNav></Sider>
                <Layout>
                    <Header>header</Header>
                    <Content style={{background:'#fff'}}>content</Content>
                    <Footer style={{textAlign:'center'}}>推荐使用谷歌浏览器,可以获得最佳页面操作体验</Footer>
                </Layout>
            </Layout>
        )
    }
}