import React from 'react';
import slugify from 'slugify';
import USCurrencyFormat from '../utils/FormatCurrency';
import Parts from '../Parts/Parts'

export default class PartList extends React.Component {
    render(){
      // NESTED MAP TO COMPILE PARTS AND FEATURE HEADERS
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        // PARTS
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item))
          return (
            <Parts 
                itemHash = {itemHash}
                key = {itemHash}
                name = {slugify(item.name)}
                cost = {item.cost}
                displayCost = {USCurrencyFormat.format(item.cost)}
             
                feature = {feature}
                handleCheckItem = {(feature, item) => this.handleCheckItem(feature, item)}
                handleSelectFeature = {(feature, item) => this.props.handleSelectFeature(feature, item)}
                selected = {this.props.selected[feature]}
            />
        )})
        // FEATURE HEADERS
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
    });
    // RETURN THE WHOLE PART LIST WITH FEATURE HEADERS
    return(
        <form className="main__form">
        <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}}


