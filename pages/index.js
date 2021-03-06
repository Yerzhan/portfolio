import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Contact from '../components/Contact'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/portfolio.jpg')`}}>
                        <header className="major">
                            <h3>Portfolio</h3>
                            <p>Recent & interesting projects</p>
                        </header>
                        <Link href="/portfolio"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/skills.jpg')`}}>
                        <header className="major">
                            <h3>Skills</h3>
                            <p>Technologies & tools I use</p>
                        </header>
                        <Link href="/skills"><a className="link primary"></a></Link>
                    </article>
                    
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Contact Me</h2>
                        </header>
                        <Contact />
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
