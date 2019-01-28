import React from 'react';
import ReactDOM from 'react-dom';

import { Tabs } from 'antd';
import 'antd/dist/antd.css';


const TabPane = Tabs.TabPane;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      {
        title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false,
      },
    ];

    this.state = {
      activeKey: panes[0].key,
      panes,

      spanListData: [
        {
          name:'111',
        },{
          name: '222'
        }
      ],
      threeListData:[
        {
          isShow: false,
          name: '1',
          name2: '2'
        },{
          isShow: false,
          name: '1',
          name2: '2'
        },
        {
          isShow: false,
          name: '1',
          name2: '2'
        }
      ]

    };
  }

  onChange = (activeKey) => {
    console.log(activeKey)
    if(activeKey==2){
       this.state.spanListData = [
        {
          name:'333',
        },{
          name: '444'
        }
      ]
    }else if(activeKey==3){
      this.state.spanListData = [
        {
          name:'555',
        },{
          name: '666'
        }
      ]
    }
   

    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  clickTrue(index){
    console.log(index)
    // this.state.threeListData[index].isShow = false;
    console.log(this.state.threeListData)
    this.setState({})
  }
  clickFalse(index){
    console.log(index)
    this.state.threeListData.forEach((item)=>{
      item.isShow = false;
    })
    this.state.threeListData[index].isShow = true;
    console.log(this.state.threeListData)
    this.setState({
      // threeListData: 
    })
  }

  render() {


    let spanList = this.state.spanListData.map((item)=>{
      return <div>
        { item.name }
      </div>
    })  


    let threeList = this.state.threeListData.map((item,index)=>{
      return <div>
        {
          item.isShow?
          <h2 onClick={ this.clickTrue.bind(this,index)}>{ item.name }</h2>
          :
          <h2 onClick={ this.clickFalse.bind(this,index) }>{  item.name2 }</h2>}
      </div>
    })






    return (
    <div>
      <Tabs
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.state.panes.map(pane => 
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            { spanList }
          </TabPane>)
        }
      </Tabs>

        <div>
          { threeList  }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'));