import React from 'react'

export class FilterSide extends React.Component {

  render() {
    const onClick = this.props.onClick
    const type = this.props.type
    const brand = this.props.brand
    const color = this.props.color
    const star = this.props.star
    const filterValue = this.props.filterValue

    return (
      <div className='Filter'>
        <div className='FilterContent'>
          <h4>Filter by:</h4>
          {filterValue.map((item,index) => {
           return  <div key={index} style={{marginBottom:"10px"}} className='CheckBox'>
                  <label style={{border:"1px solid grey", padding:"5px 8px", borderBottomLeftRadius:"12px",
                   borderTopLeftRadius:"12px", borderBottomRightRadius:"12px", borderTopRightRadius:"12px"}} 
                   >{item}<b style={{padding:"5px 8px"}}>x</b></label></div>
          })}
        </div>
        <div className='FilterContent'>
          <h4>Model</h4>
        </div>
        <div className='FilterContent'>
          <h4>Product type</h4>
          {type.map((item,index) => {
           return  <div key={index} className='CheckBox'><input type={"checkbox"} style={{cursor:"pointer"}} value={item} onClick={onClick}/>
                  <label>{item}</label></div>
          })}
          <b style={{color:"orange", paddingLeft:"10px"}}>View All</b>
        </div>
        <div className='FilterContent'>
          <h4>Grade</h4>
          {star.map((item,index) => {
           return  <div key={index} className='CheckBox'><input type={"checkbox"} style={{cursor:"pointer"}} value={item} onClick={onClick}/>
                  <label>{item}</label></div>
          })}
        </div>
        <div className='FilterContent'>
          <h4>Brand</h4>
          {brand.map((item,index) => {
           return  <div key={index} className='CheckBox'><input type={"checkbox"} style={{cursor:"pointer"}} value={item} onClick={onClick}/>
                  <label>{item}</label></div>
          })}
          <b style={{color:"orange", paddingLeft:"10px"}} onClick={this.props.viewAll}>{this.props.view ? "View All": "View Less"}</b>
        </div>
        <div className='FilterContent'>
          <h4>Color</h4>
          {color.map((item,index) => {
           return  <div key={index} className='CheckBox'><input type={"checkbox"} style={{cursor:"pointer"}} value={item} onClick={onClick}/>
                  <label>{item}</label></div>
          })}
          <b style={{color:"orange", paddingLeft:"10px"}}>View All</b>
        </div>
      </div>
    )
  }
}

export default FilterSide