import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerWithProps from '../components/BannerWithProps'

export default () => (
    <Layout>
        <Head>
            <title>Web Experiments</title>
            <meta name="description" content="Web Exprtiments Page" />
        </Head>

        <div>
            <BannerWithProps heading="Web Experiments" description="Small blocks of code doing cool stuff" />

            <div id="main">
                
            </div>

        </div>
    </Layout>
)
