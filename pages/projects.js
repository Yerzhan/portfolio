import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerWithProps from '../components/BannerWithProps'

export default () => (
    <Layout>
        <Head>
            <title>Projects</title>
            <meta name="description" content="Projects Page" />
        </Head>

        <div>
            <BannerWithProps heading="Projects" description="Bigger projects with detailed implementation info" />

            <div id="main">
                
            </div>

        </div>
    </Layout>
)
