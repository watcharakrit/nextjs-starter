import React from 'react';
import { bindActionCreators } from 'redux';

import initStore from '../store';
import { startClock, serverRenderClock } from '../store/clock';
import { fetchData } from '../store/data';
import withRedux from 'next-redux-wrapper';

import Head from 'next/head';
import Layout from '../layouts/Main';

class Blogs extends React.Component {
  static async getInitialProps ({store, isServer, query, res }) {
    await store.dispatch(serverRenderClock(isServer));
    const post = query.slug;

    return { post }
  }

  componentDidMount () {
    this.timer = this.props.startClock();
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render () {
    const { post } = this.props

    return (<Layout page="blogs">
      <h1>{post}</h1>
    </Layout>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Blogs);
