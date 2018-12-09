import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                            <h3>Portfolio</h3>
                            <p>Featured peaces of work</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>Fun Web experiments</h3>
                            <p>Small blocks of code doing fun stuff</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Projects</h3>
                            <p>Bigger projects with detailed implementation info</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>Work Experience</h3>
                            <p>Interactive diagram of work experience</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                        <header className="major">
                            <h3>Skills</h3>
                            <p>Main skills and achievements</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
                        <header className="major">
                            <h3>Hobby & inspiration</h3>
                            <p>What i like and inspire</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Info</h2>
                        </header>
                        <p>Site is made using Next.js. Main purpose is to organize all digital work.</p>
                        <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
