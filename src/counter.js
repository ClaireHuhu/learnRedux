import React from 'react';

class Counter extends React.Component {
    render () {
        let {value,handleAdd,handleMinus,state,fetch} = this.props;
        return (
            <div>
            <span>state:{state}</span>
            <button onClick={fetch}>fetch</button>
            <span>{value}</span>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleMinus}>-</button>
            </div>
            )
    }
}
export default Counter