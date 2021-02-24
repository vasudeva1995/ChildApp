import React, { Component } from 'react';
import {addDemoData} from './demoAction';
import {addDemoData2} from './demoAction2';
import { connect } from 'react-redux';
import context1 from './context1'
class MyComponent extends Component {
 
componentDidMount() {
        this.props.addDemoData('Demo Data 1');
        this.props.addDemoData2('Demo Data 2');
}

    render() { 
        return <div>
        {this.props.demoData}<br/>
        {this.props.demoData2}<br/>
        <button onClick={()=>this.props.addDemoData('Demo Data 3')}>Button 1</button><br/>
        <button onClick={()=>this.props.addDemoData2('Demo Data 4')}>Button 2</button>
        </div>;
    }
}
 
const mapStateToProps = (state) => ({
    demoData: state.demoReducer.demoData,
    demoData2: state.demoReducer2.demoData2
  });

const mapDispatchToProps = {
    addDemoData,
    addDemoData2
}  
export default connect(mapStateToProps,mapDispatchToProps,null,{context:context1})(MyComponent);