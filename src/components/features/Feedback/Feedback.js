import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';
import ClientFeedback from '../../common/ClientFeedback/ClientFeedback';

class Feedback extends React.Component {
  state = {
    activePageFeedback: 0,
  };

  handlePageChangeFeedback(newPage) {
    this.setState({ activePageFeedback: newPage });
  }

  render() {
    const { feedback } = this.props;
    const { activePageFeedback } = this.state;
    const feedbackCount = Math.ceil(feedback.length);

    const dotsFeedback = [];
    for (let i = 0; i < feedbackCount; i++) {
      dotsFeedback.push(
        <li>
          <a
            onClick={() => this.handlePageChangeFeedback(i)}
            className={i === activePageFeedback && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col ' + styles.heading}>
                <h3>Client feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dotsFeedback}</ul>
              </div>
            </div>

            <SwipeComponent
              itemsCount={feedbackCount}
              activeItem={this.state.activePageFeedback}
              swipeAction={this.handlePageChangeFeedback.bind(this)}
            >
              <div>
                {feedback
                  .slice(activePageFeedback * 1, (activePageFeedback + 1) * 1)
                  .map(item => (
                    <div key={item.id} className='col-12'>
                      <ClientFeedback {...item} />
                    </div>
                  ))}
              </div>
            </SwipeComponent>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array,
};

export default Feedback;
