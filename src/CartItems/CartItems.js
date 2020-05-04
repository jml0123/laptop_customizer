import React from 'react';

export default class CartItems extends React.Component {    
    render(){
        return(
            <div className="summary__option" key={this.props.key}>
                <div className="summary__option__label">
                    {this.props.feature}
                </div>
                <div className="summary__option__value">
                    {this.props.name}
                </div>
                <div className="summary__option__cost">
                    {this.props.cost}
                </div>
            </div>
        )
    }
}
