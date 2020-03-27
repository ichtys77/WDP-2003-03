import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainLayout extends Component {
  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    if (window.innerWidth < 768) {
      this.props.addViewport('mobile');
    } else if (window.innerWidth < 1280) {
      this.props.addViewport('tablet');
    } else if (window.innerWidth > 1280) {
      this.props.addViewport('desktop');
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  addViewport: PropTypes.func,
};

export default MainLayout;
