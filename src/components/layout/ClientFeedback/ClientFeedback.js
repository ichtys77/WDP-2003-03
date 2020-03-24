import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClientFeedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const ClientFeedback = ({ id, name, status, picture, description }) => (
  <div className={styles.root}>
    <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
    <div className={styles.description}>{description}</div>
    <div className={styles.user}>
      <img className={styles.user_photo} src={picture} alt={name} />
      <div className={styles.user_description}>
        <div>
          <strong>{name}</strong>
        </div>
        <div>{status}</div>
      </div>
    </div>
  </div>
);

ClientFeedback.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  status: PropTypes.string,
  picture: PropTypes.string,
  description: PropTypes.string,
};

export default ClientFeedback;
