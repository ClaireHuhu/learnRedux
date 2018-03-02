import React from 'react';
import {connect} from 'react-redux';

class CounterUI extends React.Component {
    render () {
        let {value,handleAdd,handleMinus} = this.props;
        return (
        <div>
            <span>vaule:{value}</span>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleMinus}>+</button>
        </div>
        ) 
    }
}
function mapStateToProps (state) {
    return {value:state.value}
}
function mapDispatchToProps (dispatch) {
    return {
        handleAdd : function(){dispatch({type:'ADD'})},
        handleMinus : function(){dispatch({type:'MINUS'})}
    }
}
var Counter = connect(mapStateToProps,mapDispatchToProps)(CounterUI);
export default Counter