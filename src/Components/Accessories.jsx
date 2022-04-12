import React from 'react'
import FilterSide from './FilterSide';
import ProductCard from './ProductCard';

export class Accessories extends React.Component {
  render() {
    return (
        <div>
            <div className='Header'>
                <h4>Nexus &#62; Accessories</h4>
                <h1>Accessories</h1>
            </div>
            <div className='Devices'>
                <div className='FilterSide'>
                    <FilterSide type={this.props.type} star={this.props.star} 
                    brand={this.props.brand} color={this.props.color} onClick={this.props.onClick}
                    filterValue={this.props.filterValue} view={this.props.view} viewAll={this.props.viewAll}/>
                </div>
                <div className='ProductSide'>
                    <ProductCard spec={this.props.spec}/>
                </div>
            </div>
        </div>
    )
  }
}

export default Accessories