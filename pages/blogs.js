import React from 'react'
import Layout from '../layouts/Main'

export default class extends React.Component {
  static async getInitialProps ({ query, res }) {
    console.log(query);
    const post = query.slug
    return { post }
  }

  render () {
    const { post } = this.props

    return (<Layout>
      <h1>{post}</h1>
    </Layout>)
  }
}