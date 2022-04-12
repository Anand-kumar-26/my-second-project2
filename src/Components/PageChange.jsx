import React from 'react'

class PageChange extends React.Component {
  render() {
      const pageDetail = this.props.pageDetail
    return (
      <div style={{textAlign:"center", margin:"30px"}}>
          <button style={{width:"80px", height:"40px", 
              border:"none", margin:"0px 10px", backgroundColor:"orange", 
              fontWeight:"bold", color:"whitesmoke"}}>Prev Page</button>
          {pageDetail.map((item, index)=>{
              return <button key={index} style={{width:"40px", height:"40px", 
              border:"none", margin:"0px 10px", backgroundColor:"orange", 
              fontWeight:"bold", color:"whitesmoke"}}>{item}</button>
          })}
          <button style={{width:"80px", height:"40px", 
              border:"none", margin:"0px 10px", backgroundColor:"orange", 
              fontWeight:"bold", color:"whitesmoke"}}>Next Page</button>
      </div>
    )
  }
}

export default PageChange