import React from 'react';

import Head from 'next/head';
import Header from '../components/Header';
import {stylesheet} from '../styles/global.scss';

export default ({ children, page }) => (
  <div>
    <Head>
      <script src='/static/scripts/html-touch-class.js' />
      <link rel='stylesheet' type='text/css' href='/static/styles/normalize.css' />
      <style dangerouslySetInnerHTML={{__html: stylesheet}} />
    </Head>
    <Header page={page} />
    { children }
  </div>
)