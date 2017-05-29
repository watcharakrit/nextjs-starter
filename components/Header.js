import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

const linkStyle = {
  margin: '0 10px 0 0'
}

export default () => (
  <div style={{ marginBottom: 20 }}>
    <Link href='/'><a style={linkStyle}>Home</a></Link>
    <Link href='/about-us'><a style={linkStyle}>About Us</a></Link>
    <Link href='/blogs?slug=test' as={`/blogs/test`}><a style={linkStyle}>Blogs-Test</a></Link>
  </div>
)
