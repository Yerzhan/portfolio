import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerWithProps from '../components/BannerWithProps'

export default () => (
    <Layout>
        <Head>
            <title>Experiments & Hobby</title>
            <meta name="description" content="Experiments & Hobby Page" />
        </Head>

        <div>
            <BannerWithProps heading="Experiments & Hobby" description="Small blocks of code doing cool stuff" />

            <div id="main">
                
            </div>

        </div>
    </Layout>
)
