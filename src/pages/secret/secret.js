import React from 'react'
import {Redirect} from 'react-router-dom'
import storeUser from '../../utils/storeUser'
import { Layout } from 'antd';
import LeftNav from '../../components/leftNav/leftNav'
import Home from '../../pages/Home/home'
import Team from '../../pages/Team/team'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Head from '../../components/header/header'
const { Header, Footer, Sider, Content } = Layout;
export default class Admin extends React.Component{
    render(){
        const user = storeUser.getUser()
        if(!user||JSON.stringify(user)==='{}'){
            return <Redirect to='/login' />
        }
        return(
            <Layout style={{height:'100%'}}>
                <Sider><LeftNav></LeftNav></Sider>
                <Layout>
                    <Header style={{background:'#fff',height:'100px',padding:'0'}}><Head></Head></Header>
                    <Content>
                        <Router>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/team' component={Team}></Route>
                            <Route path='/secret' component={Secret}></Route>
                            <Route path='/about' component={About}></Route>
                        </Router>
                    </Content>
                    <Footer style={{textAlign:'center'}}>推荐使用谷歌浏览器,可以获得最佳页面操作体验</Footer>
                </Layout>
            </Layout>
        )
    }
}
