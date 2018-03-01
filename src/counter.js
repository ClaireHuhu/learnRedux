import React from 'react';

class Counter extends React.Component {
    render () {
        let {value,handleAdd,handleMinus} = this.props;
        return (
            <div>
            <span>{value}</span>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleMinus}>-</button>
            </div>
            )
    }
}
export default Counter