import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
const LandingPage = () => {
    return (
        <section className="section-landing-page">
            <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}>
                <div className="heading-main">
                    <span className="arr-purple">&rarr;</span> I’m Hiba Fatima, a web
                    developer who builds and designs web applications and websites. At the
                    intersection of functionality and aesthetics, lorem ipsum dolor sit
                    iusto eveniet quae aperiam ipsum. Let’s make something great!&nbsp;
                    <a href="" className="copy-click">xyz@gmail.com</a>
                </div>
            </ScrollAnimation>
        </section>
    );
};
export default LandingPage;