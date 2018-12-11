import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerWithProps from '../components/BannerWithProps'

export default () => (
    <Layout>
        <Head>
            <title>Portfolio</title>
            <meta name="description" content="Portfolio Page" />
        </Head>

        <div>
            <BannerWithProps heading="Portfolio" description="Featured peaces of work" />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <p>Some of the most recent or interesting projects. To learn more about other projects please go to <Link href="/projects"><a>projects page</a></Link></p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/portfolio/smsgwicon.png" alt="smsgw" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>SMS Gateway</h3>
                                </header>
                                <div>
                                  <p>I've been a key developer of the highly loaded B2B product called SMS gateway. I made big contribution in its architecture and features to make it fast, scalable and reliable. As a result now it is used and trusted by biggest banks and companies of the country, handling millions of requests daily and helping their businesses.</p>
                                  <p>The project is based on the following technology stack:</p>
                                  <ul>
                                    <li>WildFly as main backend server and some services developed using SpringBoot.</li>
                                    <li>ActiveMQ as message broker and Apache Camel for routing.</li>
                                    <li>Oracle as main DB and PostgreSQL and MongoDB in some microservices.</li>
                                    <li>Elastic search with Kibana for logging and monitoring purposes.</li>
                                    <li>Nginx as load balancer.</li>
                                  </ul>
                                  <p>The product is providing REST/SOAP and SMPP API's for customer convenience.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/portfolio/accountskcell.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>B2B customers portal</h3>
                                </header>
                                <div>
                                  <p>I took part in this project as a supervisor, managing team of backend and frontend developers. I have configured keycloak server to implement Single-Sign On feature and participated in all parts of development.</p>
                                  <ul>
                                    <li>Backend - SpringBoot/Wildfly.</li>
                                    <li>Frontend - React.js</li>
                                  </ul>
                                </div>
                                <ul className="actions">
                                    <li><a href="https://accounts.kcell.kz/" className="button">Learn more</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic10.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Sed nunc ligula</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
