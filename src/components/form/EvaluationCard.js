import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EvaluationCard extends Component {
  render() {
    const { email, comment, stars } = this.props;
    return (
      <div>
        <p>{email}</p>
        <p>{comment}</p>
        <p>{stars}</p>
      </div>
    );
  }
}

EvaluationCard.propTypes = {
  email: PropTypes.string,
  comment: PropTypes.string,
  stars: PropTypes.number,
}.isRequired;
