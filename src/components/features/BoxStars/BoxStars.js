import React from 'react';
import PropTypes from 'prop-types';

//import styles from './BoxStars.module.scss';
import styles from '../../common/ProductBox/ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';

class BoxStars extends React.Component {
  static propTypes = {
    //id: PropTypes.string,
    stars: PropTypes.number,
    rating: PropTypes.number,
    addRating: PropTypes.func,
  }

  state = {
    rating: 0,
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
  
  
  setStars(e, star) {
    
    e.preventDefault();
    //this.props.addRating(this.props.id);
   

    this.setState({
      rating: star,
    });
  }
  
  /*
 setStars(star, e) {     //e, 
    
  //e.preventDefault();
  //this.props.addRating(this.props.id);


this.setState(
  {rating: star,
  }); 
//this.props.addRating(star);


}
*/


  render() {
    const { id, stars, rating,    addRating} = this.props;   //addRating
    const { starStatus } = this.state;    //rating

    return (
      <div className={styles.stars} onMouseOut={() => this.outOfStars()}>
        {starStatus.map(i => (
          <a
            key={i.id}
            href='#'
            onClick={e => {
              e.preventDefault();
              this.setStars(e, i.id);    //e,
            }} 

          >
            <FontAwesomeIcon
              onMouseOver={() => this.onStars(i.id)}
              icon={
                (i.active
                  ? i.active === 'active'
                  : i.id <= (this.state.rating || this.props.rating || stars ))  //this.props.rating || this.state.rating
                  ? faStar
                  : farStar
              }

              className={
                i.active 
                  ? 
                  ((i.active === 'active') 
                || (i.id <= (this.state.rating || this.props.rating))
                    ? styles.active : '' )
                  :
                  (this.state.rating !=0) ?
                    styles.active : ''
              }
            />
          </a>
        ))}

        <div>{rating}</div>
      </div>
    );
  }
}


/*
BoxStars.propTypes = {
  stars: PropTypes.number,
  rating: PropTypes.number,
  stars: PropTypes.number,
  onStars: PropTypes.func,
  setOpinion: PropTypes.func,
}; */

export default BoxStars;
