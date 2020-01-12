import React from 'react'
import Head from 'next/head'
import Header from './header'
import '../styles/styles.sass'

const Layout = props => (
  <React.Fragment>
    <Head>
      <title>Autentication Autorization Accounts</title>
    </Head>
    <Header />
    <main>
      {props.children}
    </main>
  </React.Fragment>
)

export default Layout
