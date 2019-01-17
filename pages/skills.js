import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerWithProps from '../components/BannerWithProps'
import Skills from '../components/Skills'

export default () => (
    <Layout>
        <Head>
          <title>Skills</title>
          <meta name="description" content="Skills Page" />
        </Head>

        <div>
            <BannerWithProps heading="Skills" description="Technologies & tools I use" />

            <div id="main" className="alt">
              <section id="one">
                <div className="inner">
                    <header className="major">
                      <h2>Main Skills and Expertise</h2>
                    </header>
                    <Skills />

                    <header className="major">
                        <h2>Tools and Technologies</h2>
                    </header>
                    <ul className="skill-tools">
                      <li><b>Backend</b> 
                        <p>Java: Spring Boot, WildFly, Tomcat, Hibernate, ActiveMQ</p> 
                        <p>JavaScript: Node.js, Express</p>
                      </li>
                      <li><b>Frontend</b>
                        <p>ReactJS, Vue.js, jQuery, HTML, CSS, SCSS, Vaadin, Play framework</p>
                      </li>
                      <li><b>Mobile</b>
                        <p>Swift, Kotlin, React Native</p>
                      </li>
                      <li><b>Storage</b>
                        <p>OracleDB, MongoDB, PostgreSQL, MySQL, Redis</p>
                      </li>
                      
                    </ul>
                </div>
              </section>
            </div>  
        </div>
    </Layout>
)
