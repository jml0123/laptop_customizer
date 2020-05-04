import React from 'react';
import CartItems from '../CartItems/CartItems';
import Payment from '../Payment/Payment';
import USCurrencyFormat from '../utils/FormatCurrency';
    
export default class Cart extends React.Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = `${feature}-${idx}`;
            const selectedOption = this.props.selected[feature];
            return (
                <CartItems 
                    feature = {feature}
                    featureHash = {featureHash}
                    key = {featureHash}
                    name = {selectedOption.name}
                    cost = {USCurrencyFormat.format(selectedOption.cost)}
                />
            )
        });
 
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Payment selected = {this.props.selected}/>
            </section>
        )
}}

    
  