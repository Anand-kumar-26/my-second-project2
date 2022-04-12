import React, { Component } from 'react';
import { RiTruckFill } from 'react-icons/ri';
import { VscTag } from 'react-icons/vsc';
import { BsScissors } from 'react-icons/bs'

export class MainHeader1 extends Component {
  render() {
    return (
        <div style={{borderTop:"2px solid grey", borderBottom:"1px solid grey", height:"25px", backgroundColor:"whitesmoke"}}>
            <div style={{display:"inline-flex", fontSize: "20px"}}>
                <div style={{marginLeft:"20px", color:"orange", height:"25px"}}>
                    <RiTruckFill/>
                </div>
                <div style={{marginLeft:"10px", height:"25px"}}>
                    <b style={{fontSize: "13px", color:"gray"}}>Free Shipping on Orders above <b style={{color:"black"}}>$400</b></b>
                </div>
            </div>
            <div style={{display:"inline-flex", fontSize: "20px", marginLeft:"10px"}}>
                <div style={{marginLeft:"20px", color:"orange", height:"25px"}}>
                    <VscTag/>
                </div>
                <div style={{marginLeft:"10px", height:"25px"}}>
                    <b style={{fontSize: "13px", color:"gray"}}>Lifetime warranty on Parts</b>
                </div>
            </div>
            <div style={{display:"inline-flex", fontSize: "20px", marginLeft:"10px"}}>
                <div style={{marginLeft:"20px", color:"orange", height:"25px"}}>
                    <BsScissors/>
                </div>
                <div style={{marginLeft:"10px", height:"25px"}}>
                    <b style={{fontSize: "13px", color:"gray"}}>Up to <b style={{color:"black"}}>8pm</b> order cutoffs</b>
                </div>
            </div>
            <div style={{display:"inline-flex", fontSize: "20px", marginLeft:"420px"}}>
                <div style={{marginLeft:"10px", height:"25px"}}>
                    <b style={{fontSize: "14px", color:"gray"}}>Knowledge Base</b>
                </div>
            </div>
            <div style={{display:"inline-flex", fontSize: "20px", marginLeft:"50px"}}>
                <div style={{marginLeft:"10px", height:"25px"}}>
                    <b style={{fontSize: "14px", color:"gray"}}>About Us</b>
                </div>
            </div>
            <div style={{display:"inline-flex", fontSize: "20px", marginLeft:"10px"}}>
                <div style={{marginLeft:"10px", height:"25px"}}>
                    <b style={{fontSize: "14px", color:"gray"}}>Blog</b>
                </div>
            </div>
            <div style={{display:"inline-flex", fontSize: "20px", marginLeft:"10px"}}>
                <div style={{marginLeft:"10px", height:"25px"}}>
                    <b style={{fontSize: "14px", color:"gray"}}>Contact Us</b>
                </div>
            </div>
        </div>
    )
  }
}

export default MainHeader1