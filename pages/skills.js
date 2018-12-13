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
                    <Skills />
                </div>
              </section>
            </div>
        </div>
    </Layout>
)
