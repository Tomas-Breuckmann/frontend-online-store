import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EvaluationCard from './EvaluationCard';

export default class Form extends Component {
  constructor() {
    super();
    // const { id } = this.props;
    // const filter = actualStorage.filter((element) => element.id === id);

    if (JSON.parse(window.localStorage.getItem('evaluations')) === null) {
      window.localStorage.setItem('evaluations', '[]');
    }

    if (JSON.parse(window.localStorage.getItem('actualEvaluation')) === null) {
      window.localStorage.setItem('actualEvaluation', JSON.stringify({
        email: '',
        stars: 1,
        comment: '',
      }));
    }

    const initialStorage = JSON.parse(window.localStorage.getItem('actualEvaluation'));
    console.log(initialStorage);
    this.state = {
      evaluations: JSON.parse(window.localStorage.getItem('evaluations')),
      email: '',
      stars: 1,
      comment: '',
    };
  }
  // [...evaluations, newComment]

  handleChange = ({ target: { name, value } }) => {
    /* const { id } = this.props; */
    this.setState({
      [name]: value,
    }, () => {
      const newState = this.state;
      const { email, stars, comment } = newState;
      const actualEvaluation = {
        email,
        stars,
        comment,
      };
      window.localStorage.setItem('actualEvaluation', JSON.stringify(actualEvaluation));
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const { evaluations } = this.state;
    // console.log(evaluations);
    const { evaluations, email, stars, comment } = this.state;
    const { id } = this.props;
    const newComment = {
      id,
      email,
      stars,
      comment,
    };
    const newStorage = [...evaluations, newComment];
    this.setState({
      evaluations: newStorage,
    }, () => {
      localStorage.setItem('evaluations', JSON.stringify(newStorage));
      this.setState({
        email: '',
        stars: 1,
        comment: '',
      });
    });
  }

  render() {
    const { evaluations,
      email: actualEmail,
      comment: actualComment,
      stars: actualStars } = this.state;
    const { id } = this.props;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email-input">
            Email
            <input
              value={ actualEmail }
              data-testid="product-detail-email"
              type="email"
              name="email"
              id="email-input"
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="text-input">
            Comentário
            <textarea
              value={ actualComment }
              data-testid="product-detail-evaluation"
              name="comment"
              id="text-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="stars">
            Nota
            <select
              onChange={ this.handleChange }
              name="stars"
              id="select"
              defaultValue={ actualStars }
            >
              <option name="stars" value="1" data-testid="1-rating">1</option>
              <option name="stars" value="2" data-testid="2-rating">2</option>
              <option name="stars" value="3" data-testid="3-rating">3</option>
              <option name="stars" value="4" data-testid="4-rating">4</option>
              <option
                name="stars"
                value="5"
                data-testid="5-rating"
                // selected={ actualStars === '5' ? 'true' : 'false' }
              >
                5
              </option>
            </select>
          </label>

          {/* <label htmlFor="stars">
            1
            <input
              id="radio1"
              value="1"
              type="radio"
              data-testid="1-rating"
              name="stars"
              onClick={ this.handleChange }
            />
          </label>
          <label htmlFor="stars">
            2
            <input
              value="2"
              type="radio"
              data-testid="2-rating"
              name="stars"
              onClick={ this.handleChange }
            />
          </label>
          <label htmlFor="stars">
            3
            <input
              value="3"
              type="radio"
              data-testid="3-rating"
              name="stars"
              onClick={ this.handleChange }
            />
          </label>
          <label htmlFor="stars">
            4
            <input
              value="4"
              type="radio"
              data-testid="4-rating"
              name="stars"
              onClick={ this.handleChange }
            />
          </label>
          <label htmlFor="stars">
            5
            <input
              value="5"
              type="radio"
              data-testid="5-rating"
              name="stars"
              onClick={ this.handleChange }
            />
          </label> */}
          {/* <label htmlFor="input-nota">
            Nota
            <input
              type="number"
              name="stars"
              min="1"
              max="5"
              onChange={ this.handleChange }
              required
            />
          </label> */}
          <button
            data-testid="submit-review-btn"
            type="submit"
            // onClick={ this.handleClick }
          >
            Avaliar
          </button>
        </form>
        { evaluations.lenght === 0
          ? <p>Ainda não há comentários sobre este produto.</p>
          : (
            evaluations.filter((element) => element.id === id)
              .map(({ email, comment, stars }, index) => (
                <EvaluationCard
                  key={ index }
                  email={ email }
                  comment={ comment }
                  stars={ stars }
                />
              ))) }
      </div>
    );
  }
}

Form.propTypes = {
  id: PropTypes.string.isRequired,
};
