import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

// 数据
const data = [
    '早上开晨会',
    '中午睡午觉',
    '晚上敲代码'
]


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <div style={{margin: '10px'}}>
                    <div>
                        <Input placeholder='Write something' style={{width: '250px'}}></Input>
                        <Button type='danger'>增加</Button>
                    </div>
                    <div style={{margin: '10px', width: '300px'}}>
                        <List
                            bordered
                            dataSource={data}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                    </div>
                </div>
        );
    }
}
 
export default TodoList;