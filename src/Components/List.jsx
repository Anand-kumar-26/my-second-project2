import React from 'react'
import {FiPhone} from 'react-icons/fi'

class List extends React.Component {
  render() {
    const activePage = this.props.activePage
    return (
      <div style={{paddingLeft:"20px", borderTop:"1px solid grey", borderBottom:"2px solid grey", height:"50px"}}>
          {this.props.list.map((item, index) =>{
            return  <ListData key={index} data={item} onClick={activePage}/>
          })}
          <div className='Listdata' style={{display:"inline-flex", paddingRight:"70px"}}>
              <h3 style={{color:"orangered"}}>&#37; Sales &#38; Deald</h3>
          </div>
          <div className='Listdata' style={{display:"inline-flex", paddingRight:"70px"}}>
              <h3>...</h3>
          </div>
          <div className='Listdata' style={{display:"inline-flex", flexDirection:"row", paddingLeft:"28%"}}>
               <FiPhone/> Hotline: +1-877-614-1001
          </div>
      </div>
    )
  }
}

export default List

class ListData extends React.Component {
  constructor(props){
      super(props);
      this.state={
        onHover: false
      }
      this.onMouseDown = this.onMouseDown.bind(this);
    }

    onMouseDown(){
          this.setState({onHover: !this.state.onHover})
    }

render() {
  return (
              <div className={this.state.onHover ? "ListDataActive" : "ListData" } style={{display:"inline-flex",
               marginRight:"70px", height:"45px", cursor: "pointer"}}
               onClick={this.props.onClick}>
                       <h3>{this.props.data}</h3>
              </div>

          )
}
}