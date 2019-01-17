const BannerWithProps = (props) => (
    <section id="banner" className="style1">
        <div className="inner">
            <header className="major">
                <h1>{props.heading}</h1>
            </header>
            <div className="content">
                <p>{props.description}</p>
            </div>
        </div>
    </section>
)

export default BannerWithProps
