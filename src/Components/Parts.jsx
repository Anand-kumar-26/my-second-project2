import React from 'react';
import FilterSide from './FilterSide';

export class Parts extends React.Component {
  render() {
    return (
        <div>
            <div className='Header'>
                <h4>Nexus &#62; Parts</h4>
                <h1>Parts</h1>
            </div>
            <div className='Parts'>
                <div className='FilterSide'>
                    <FilterSide type={this.props.type} star={this.props.star} 
                    brand={this.props.brand} color={this.props.color} onClick={this.props.onClick}
                    filterValue={this.props.filterValue} view={this.props.view} viewAll={this.props.viewAll}/>
                </div>
                <div className='ProductSide'>
                </div>
            </div>
        </div>
    )
  }
}

export default Parts