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
            <BannerWithProps heading="Portfolio" description="Recent & interesting projects" />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <p>Some of the most recent and interesting projects available in production. Check out my <a href="https://github.com/Yerzhan">GitHub page</a> for more projects or <a href="https://www.linkedin.com/in/yerzhan-sarbassov/">LinkedIn profile</a> for work experience information</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <a className="image"><img src="/static/images/portfolio/smsgwicon.png" alt="smsgw" /></a>
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
                                    <li>Elasticsearch with Kibana for logging and monitoring purposes.</li>
                                    <li>Nginx as load balancer.</li>
                                    <li>Frontend - React.js</li>
                                  </ul>
                                  <p>The product is providing REST/SOAP and SMPP API's for customer convenience.</p>
                                </div>
                                <ul className="actions">
                                  <li><Link href="/portfolio/smsgw"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/portfolio/tekWeb.jpg" alt="" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Tekweb - seflcare portal</h3>
                                </header>
                                <p>
                                  This is a self-care portal. I've developed it's backend and frontend. It has some legasy functionality, so it's backend is written using Tomcat with JSP's.
                                  I've made its redesign and implemented different usability features.
                                  I've also created animated logo, using Airbnb's lottie library.
                                </p>
                                <ul className="actions">
                                    <li><a href="https://tekweb.tekelektrik.com.tr/" className="button">Learn more</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/portfolio/accountskcell.jpg" alt="" /></a>
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
                        <a className="image"><img src="/static/images/portfolio/tekworkflow.jpg" alt="" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>TekWorkflow - workflow management</h3>
                                </header>
                                <div>
                                  <p>This is internal workflow management application.It helps managing monthly operations and daily work support.</p>
                                  <ul>
                                    <li>Backend - SpringBoot.</li> 
                                    <li>Frontend - Vaadin Framework.</li>
                                  </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/portfolio/postable.jpg" alt="" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Postable - unique wallpapers</h3>
                                </header>
                                <p>iOS application written on Swift. It uses Core Image to manipulate assets and create beautiful and unique wallpapers and background images.</p>
                                <ul className="actions">
                                    <li><a href="https://itunes.apple.com/kz/app/postable/id1121689889?mt=8" className="button">Learn more</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/portfolio/furry-runner.jpg" alt="" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Furry runner - game</h3>
                                </header>
                                <p>
                                  Cross-platform runner game with in-app purchase.
                                  Main character and almost all assets with animations are made by me.
                                  Game engine - LibGDX.
                                </p>
                                <ul className="actions">
                                    <li><a href="https://play.google.com/store/apps/details?id=ru.sardieri.furryrunner" className="button">Learn more</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a className="image"><img src="/static/images/portfolio/kcellkz.jpg" alt="" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Kcell.kz - mobile operator site</h3>
                                </header>
                                <p>
                                  This is a site of the mobile operator.
                                  I took part in it as a supervisor of the team from 2016. It has a custom developed CMS written on Play framework. 
                                  The site also uses Play Framework as backend. In the frontend there are some functionality written using React.js, Vue.js, and jQuery.
                                </p>
                                <ul className="actions">
                                    <li><a href="https://www.kcell.kz/" className="button">Learn more</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
