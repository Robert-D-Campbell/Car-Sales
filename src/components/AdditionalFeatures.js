import React from 'react';
import {connect} from 'react-redux'
import {addItem} from '../actions'


import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addItem={props.addItem}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps, {addItem})(AdditionalFeatures);
