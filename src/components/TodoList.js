import React, { Component } from 'react'
import store from '../store/index'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'


class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState())
        this.state = store.getState()
    }
    render() { 
        return ( 
                <div style={{margin: '10px'}}>
                    <div>
                        <Input placeholder= {this.state.inputValue} style={{width: '250px'}}></Input>
                        <Button type='danger'>增加</Button>
                    </div>
                    <div style={{margin: '10px', width: '300px'}}>
                        <List
                            bordered
                            dataSource={this.state.listValue}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                    </div>
                </div>
        );
    }
}
 
export default TodoList;