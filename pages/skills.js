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
            <BannerWithProps heading="Skills" description="Interactive diagram of skills" />

            <div id="main">
                
            </div>

        </div>
    </Layout>
)
