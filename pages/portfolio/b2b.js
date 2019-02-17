import Head from "next/head"

import Layout from '../../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>B2B Self-Care Portal</title>
            <meta name="description" content="B2B Self-Care Portal" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>B2B Self-Care Portal</h1>
                    </header>
                    <span className="image main"><img src="/static/images/projects/B2B_selfcare.jpg" alt="" /></span>
                    <p>This project represents customer Self-Care portal for business clients. It provides access to many other company services and allows to manage company’s corporate numbers pool.</p>
                    
                    <div className="row 200%">
                        <div className="6u 12u(medium)">
                          <p>I took part in its backend development and configured single sign-on with Identity management using Keycloak. On the frontend the project is using React with custom components library developed for reuse in other company services.</p>
                        </div>

                        <div className="6u 12u(medium)">
                          <span className="image fit"><img src="/static/images/projects/B2B_numberManagement.jpg" alt="" /></span>
                          <span className="image fit"><img src="/static/images/projects/B2B_paymentHistory.jpg" alt="" /></span>
                        </div>
                    </div>
                    
                    <h3>Technologies used</h3>
                      <blockquote>Java, JavaScript, ReactJS, Webpack, REST API, Redis, Docker, Nginx, Jest, JUnit, SpringBoot, Keycloak, OracleDB, PostgreSQL, Elasticsearch</blockquote>
                </div>
            </section>
        </div>
    </Layout>
)
