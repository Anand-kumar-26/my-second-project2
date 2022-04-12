import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'

class Quantity extends React.Component {
    constructor(props){
        super(props);
        this.state={
          quantity:0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
      }
      increment(){
        this.setState({quantity: this.state.quantity + 1})
      }
      decrement(){
          if(this.state.quantity>0){
        this.setState({quantity: this.state.quantity - 1})
          }
      }
  render() {
    return (
        <div className='Quantity'>
          <button onClick={this.decrement}>-</button>
          <p>{this.state.quantity}</p>
          <button  onClick={this.increment}>+</button>
          <button className='Cart'><AiOutlineShoppingCart/></button>
        </div>
    )
  }
}

export default Quantity