import React from 'react';
import { bindActionCreators } from 'redux';

import initStore from '../store';
import { startClock, serverRenderClock } from '../store/clock';
import withRedux from 'next-redux-wrapper';

import Head from 'next/head';
import Layout from '../layouts/Main';

import {stylesheet, styles} from './index.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

let fontClass = cx(
  'touch',
  {
    test: true,
    pretty: true
  }
);

class Index extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    await store.dispatch(serverRenderClock(isServer))

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock();
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Layout page="index">
        <Head>
          <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        </Head>
        <h1 className={fontClass}>Welcome, Next Getalongwell.co.th</h1>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Index);
