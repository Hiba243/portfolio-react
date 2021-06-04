const LandingPage = () => {
    return (
        <section className="section-landing-page">
            <div className="carousel-section">
                <ul id="carousel">
                    <li style={{ opacity: '1' }}>
                        <img
                            className="carousel-img"
                            src="https://marklchaves.files.wordpress.com/2020/01/bali-pasar-ubud-ibu-duduk-sinar-512w.jpg"
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            className="carousel-img"
                            src="https://marklchaves.files.wordpress.com/2020/01/bhutan-paro-mark-self-portrait-down-bw-512w.jpg"
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            className="carousel-img"
                            src="https://marklchaves.files.wordpress.com/2020/01/arizona-phoenix-art-emily-512w.jpg"
                            alt=""
                        />
                    </li>
                </ul>
            </div>
            <div className="heading-main">
                <p className="heading-main__text">
                    <span className="arr-purple">&rarr;</span> I’m Hiba Fatima, a web
            developer who builds and designs web apps and websites. At the
            intersection of functionality and aesthetics, lorem ipsum dolor sit
            iusto eveniet quae aperiam ipsum. Let’s make something great!
            <a
                        href=""
                        className="copy-click"
                        data-tooltip-text="Click to copy"
                        data-tooltip-text-copied="✔ Copied to clipboard"
                    >xyz@gmail.com</a
                    >
                </p>
            </div>
        </section>
    );
};
export default LandingPage;