import Head from 'next/head';
import Link from 'next/link';

import {stylesheet, styles} from './Header.scss';

import Clock from '../Clock'

export default ({page, lastUpdate, light}) => {
  return (
          <div style={{ marginBottom: 20 }}>
            <Head>
              <style dangerouslySetInnerHTML={{__html: stylesheet}} />
            </Head>
            <Link href='/'><a className={`${styles.link} ${page==='index'?styles.active:''}`}>Home</a></Link>
            <Link href='/about-us'><a className={`${styles.link} ${page==='about'?styles.active:''}`}>About Us</a></Link>
            <Link href='/blogs?slug=test' as={`/blogs/test`}><a className={`${styles.link} ${page==='blogs'?styles.active:''}`}>Blogs-Test</a></Link>
            <div>
              <Clock lastUpdate={lastUpdate} light={light} />
            </div>
            <img className={styles.logo} src="/static/logo.svg" />
          </div>
        )
}
