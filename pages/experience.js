import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerWithProps from '../components/BannerWithProps'

export default () => (
    <Layout>
        <Head>
            <title>Work Experience</title>
            <meta name="description" content="Work Experience Page" />
        </Head>

        <div>
            <BannerWithProps heading="Work Experience" description="Timeline of work experience" />

            <div id="main">
                
            </div>

        </div>
    </Layout>
)
