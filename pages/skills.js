import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerWithProps from '../components/BannerWithProps'

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
                    <div className="skills">
                      <ul>
                        <li><span className="ninja"></span><em>Java</em></li>
                        <li><span className="expert"></span><em>SpringBoot</em></li>
                        <li><span className="expert"></span><em>JavaScript</em></li>
                        <li><span className="advanced"></span><em>ReactJS</em></li>
                        <li><span className="ninja"></span><em>HTML</em></li>
                        <li><span className="expert"></span><em>CSS</em></li>
                        <li><span className="good"></span><em>jQuery</em></li>
                      </ul>
                    </div>
                </div>
              </section>
            </div>
        </div>
    </Layout>
)
