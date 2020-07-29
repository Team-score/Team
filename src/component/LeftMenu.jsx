import React, { Component } from 'react'

import { Menu } from 'antd';
import { LaptopOutlined } from '@ant-design/icons'

import {inject,observer} from 'mobx-react'

const { SubMenu } = Menu;

@inject('user')

@observer
class LeftMenu extends Component {
    constructor(){
        super();
        this.state={
            menuname:[]
        }   
    }
    Menu(menu1){
        let menu = menu1.map((item,index)=>{
            if(item.menuChilds.length===0){
                return <Menu.Item key={item.menuId}>{item.menuName}</Menu.Item>
            }else{
                return  <SubMenu key={item.menuId} icon={<LaptopOutlined />} title={item.menuName}>
                           {this.Menu(item.menuChilds)}
                        </SubMenu>  
            }   
        })  
        return menu
    }
    UNSAFE_componentWillMount(){ 
       let a =  this.Menu(this.props.user.user.menuInfo);       
        this.setState({
            menuname:a    
        })
    }   
    render() {
        return (    
            <div>   
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                    {this.state.menuname}
                </Menu> 
            </div>
        )
    }
}
export default LeftMenu;