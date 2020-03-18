import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';

class BoxStars extends React.Component {
  state = {
    rating: false,
    starStatus: [
      {
        id: 1,
        active: false,
      },
      {
        id: 2,
        active: false,
      },
      {
        id: 3,
        active: false,
      },
      {
        id: 4,
        active: false,
      },
      {
        id: 5,
        active: false,
      },
    ],
  };

  onStars(star) {
    this.setState(({ starStatus }) => {
      return starStatus.map(i => {
        if (i.id <= star) {
          i.active = 'active';
        } else {
          i.active = 'inactive';
        }
        return i;
      });
    });
  }

  outOfStars() {
    this.setState(({ starStatus }) => {
      return starStatus.map(i => {
        i.active = false;
        return i;
      });
    });
  }

  setStars(star) {
    this.setState({
      rating: star,
    });
  }

  render() {
    const { stars } = this.props;
    const { starStatus, rating } = this.state;

    return (
      <div className={styles.stars} onMouseOut={() => this.outOfStars()}>
        {starStatus.map(i => (
          <a
            key={i.id}
            href='#'
            onClick={e => {
              e.preventDefault();
              this.setStars(i.id);
            }}
          >
            <FontAwesomeIcon
              onMouseOver={() => this.onStars(i.id)}
              icon={
                (i.active
                ? i.active === 'active'
                : i.id <= (stars || rating))
                  ? faStar
                  : farStar
              }
              className={
                (i.active ? i.active === 'active' : i.id <= rating) ? styles.active : ''
              }
            />
          </a>
        ))}
      </div>
    );
  }
}

BoxStars.propTypes = {
  stars: PropTypes.number,
  rating: PropTypes.number,
  stars: PropTypes.number,
  onStars: PropTypes.func,
  setOpinion: PropTypes.func,
};

export default BoxStars;
