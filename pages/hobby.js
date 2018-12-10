import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerWithProps from '../components/BannerWithProps'

export default () => (
    <Layout>
        <Head>
            <title>Hobby</title>
            <meta name="description" content="Hobby Page" />
        </Head>

        <div>
            <BannerWithProps heading="Hobby & Inspiration" description="What I like and inspire" />

            <div id="main">
                
            </div>

        </div>
    </Layout>
)
