import React from 'react';
import PropTypes from 'prop-types';


const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */}{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt='user profile'/>
        </div>
        <span>By {props.card.author} {/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.arrayOf(PropTypes.string)
}

export default Card;
