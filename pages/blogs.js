import React from 'react'
import Header from '../components/Header'

export default class extends React.Component {
  static async getInitialProps ({ query, res }) {
    console.log(query);
    const post = query.slug
    return { post }
  }

  render () {
    const { post } = this.props

    return (<div>
      <Header />
      <h1>{post}</h1>
    </div>)
  }
}