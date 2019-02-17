import Head from "next/head"

import Layout from '../../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>SMSGW</title>
            <meta name="description" content="SMSGW" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>SMSGW</h1>
                    </header>
                    <span className="image main"><img src="/static/images/projects/SMSGW_home.jpg" alt="" /></span>
                    <p>SMS gateway is a highly loaded B2B product to send bulk SMS’s. I've been a key developer of it’s backend service and made a big contribution in its architecture and features to make it fast, scalable and reliable. As a result now it is used and trusted by biggest banks and companies of the country, handling millions of requests daily and helping their businesses.</p>
                    
                    <div className="row 200%">
                        <div className="6u 12u(medium)">
                          <p>This project represents self-care cabinet for customers of the service. It’s a part of company’s B2B portal.</p>
                          <p>I’ve participated in this project as a supervisor of the team and also took part in the development of frontend React components.</p>
                        </div>

                        <div className="6u 12u(medium)">
                          <span className="image fit"><img src="/static/images/projects/SMSGW_newBulk.jpg" alt="" /></span>
                          <span className="image fit"><img src="/static/images/projects/SMSGW_search.jpg" alt="" /></span>
                        </div>
                    </div>
                    
                    <h3>Technologies used</h3>
                      <blockquote>Java, JavaScript, ReactJS, Webpack, REST API, Redis, Docker, Nginx, Jest, JUnit, SpringBoot, PostgreSQL, Elasticsearch</blockquote>
                </div>
            </section>
        </div>
    </Layout>
)
