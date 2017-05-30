import Layout from '../layouts/Main'
import Head from 'next/head'
import {stylesheet, styles} from './index.scss'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

let fontClass = cx(
  'touch',
  {
    test: true,
    pretty: true
  }
);

export default () => (
 <Layout>
  <Head>
    <style dangerouslySetInnerHTML={{__html: stylesheet}} />
  </Head>
  <h1 className={fontClass}>Welcome, Next Getalongwell.co.th</h1>
 </Layout>
)
