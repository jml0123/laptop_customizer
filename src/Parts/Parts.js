   import React from 'react';
   
   export default class Parts extends React.Component {
    render(){
      return (
          <div key={this.props.itemHash} className="feature__item">
            <input
              type="radio"
              id={this.props.itemHash}
              className="feature__option"
              name={this.props.name}
              feature= {this.props.feature}
              onChange={e => this.props.handleSelectFeature(this.props.feature, this.props)}
              checked = {this.props.name === this.props.selected.name}
            />
            <label htmlFor={this.props.itemHash} className="feature__label">
              {this.props.name} ({this.props.displayCost})
            </label>
          </div>
        )}
   }
