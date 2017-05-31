import React from 'react';
import { bindActionCreators } from 'redux';

import initStore from '../store';
import { startClock, serverRenderClock } from '../store/clock';
import { fetchData } from '../store/data';
import withRedux from 'next-redux-wrapper';

import Head from 'next/head';
import Layout from '../layouts/Main';

class AboutUs extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    await Promise.all([
      store.dispatch(serverRenderClock(isServer)),
      store.dispatch(fetchData())
    ]);

    return { isServer };
  }

  componentDidMount () {
    this.timer = this.props.startClock();
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render () {
    return (
      <Layout page="about">
        <h1>GetAlongWell.co.th - Page About Us</h1>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startClock : bindActionCreators(startClock, dispatch),
    fetchData  : bindActionCreators(fetchData, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(AboutUs);
