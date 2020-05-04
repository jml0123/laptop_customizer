import React from 'react';
import USCurrencyFormat from '../utils/FormatCurrency';

export default class Payment extends React.Component {
    render(){
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost, 0);

        return(
            <div className="summary__total">
                <div className="summary__total__label">
                    Total
                </div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        )
    }
}