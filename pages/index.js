import React from 'react'
import Layout from '../components/layout'

const Home = () => (
  <Layout>
    <section className="hero is-medium is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cookie-based authentication example</h1>
          <h2 className="subtitle">Steps to test the functionality:</h2>
          <ol>
            <li>Click login and enter your GitHub username.</li>
            <li>
              Click home and click profile again, notice how your session is being
              used through a token stored in a cookie.
            </li>
            <li>
              Click logout and try to go to profile again. You'll get redirected to
              the `/login` route.
          </li>
          </ol>
        </div>
      </div>
    </section>
  </Layout>
)

export default Home
