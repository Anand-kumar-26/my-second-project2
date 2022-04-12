import React, { Component } from 'react';
import {BiSearch} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {RiShoppingBag3Line} from 'react-icons/ri'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export class MainHeader extends Component {
  render() {
    return (
    <div style={{borderTop:"1px solid grey", borderBottom:"1px solid grey", height:"70px"}}>

        <div style={{display:"inline-flex", paddingLeft:"60px"}}>
           <h2>nexus cellular</h2>
        </div>

        <div style={{display:"inline-flex", paddingLeft:"40px"}}>

           <input type={"search"} placeholder={"Search..."} className="MainSearchInput"
           style={{width:"750px", height:"40px", backgroundColor:"whitesmoke", borderStyle:"none"
           , borderTopLeftRadius:"15px",  borderBottomLeftRadius:"15px"}}/>

           <select style={{border: "none", backgroundColor: "whitesmoke", 
           width:"100px", color:"grey"}} onChange={this.props.onChange}>
              <option value="All Category">All Category</option>
              <option value="Parts">Parts</option>
              <option value="Accessories">Accessories</option>
              <option value="Devices">Devices</option>
              <option value="BuyBack">BuyBack</option>
              <option value="&#37; Sales &#38; Deald">&#37; Sales &#38; Deald</option>
            </select>

           <button style={{backgroundColor:"orange",fontSize: "18px", fontWeight: "bold", color:"black", border:"none", width:"40px"
          , borderTopLeftRadius:"20px", borderTopRightRadius:"20px",  borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px"}}><BiSearch/></button>
        </div>

        <div style={{display:"inline-flex", flexDirection:"column", fontSize: "32px" ,paddingLeft:"60px"}}>
          <div style={{marginLeft:"10px"}}>
            <CgProfile/>
          </div>
          <b style={{fontSize: "14px"}}>Hi Guest</b>
        </div>
        <div style={{display:"inline-flex", flexDirection:"column", fontSize: "32px" ,paddingLeft:"40px"}}>
          <div style={{marginLeft:"20px"}}>
            <RiShoppingBag3Line/>
          </div>
          <b style={{fontSize: "14px"}}>Quick Order</b>
        </div>
        <div style={{display:"inline-flex", flexDirection:"column", fontSize: "32px" ,paddingLeft:"40px"}}>
          <div>
            <AiOutlineShoppingCart/>
          </div>
          <b style={{fontSize: "14px", paddingLeft:"5px"}}>Cart</b>
        </div>
        
    </div>
    )
  }
}

export default MainHeader