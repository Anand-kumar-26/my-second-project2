import React from 'react'
import Quantity from './Quantity'

class ProductCard extends React.Component {
  render() {
    const spec = this.props.spec
    return (
      spec.map((item,index) =>
      <div className='Product' key={index}>
          <div className='LeftContent'>
              <img src={item.src} alt={item.alt}/>
          </div>
          <div className='RightContent'>
            <div className='Heading'>
              <h2>{item.title}<br/>{item.type}</h2>
              <b>SKU: {item.idno}</b>
            </div>
            <div>
              <p>Operating system: <b>{item.os}</b></p>
              <p>Display: <b>{item.display}</b></p>
              <p>Display resolution: <b>{item.resolution}</b></p>
              <p>CPU: <b>{item.cpu}</b></p>
              <p>RAM size: <b>{item.ram}</b></p>
              <p>Built-in-memory: <b>{item.memory}</b></p>
            </div>
          </div>
          <div className='RightContent2'>
            <div>
              <h5>{item.rate1}</h5>
              <h2>{item.rate2}</h2>
            </div>
            <Quantity/>
          </div>
      </div>
      )
    )}
}

export default ProductCard