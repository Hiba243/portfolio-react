import "animate.css/animate.min.css";
import {Link} from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {
    return <section className="section-padding section-work" id="work">
        <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}>
        <div className="text__heading">
            <span className="arr-purple">&rarr;</span> Selected Work
        </div>
        </ScrollAnimation> 
        <section>
            <div className="project">
                <ScrollAnimation animateIn="animate__rotateInUpLeft" className="animate__animated" animateOnce={true}>
                    <div className="project__img">&nbsp;</div>
                </ScrollAnimation>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <p className="project__desc__text-h1 text__subheading">Project Name</p>
                        <p className="text__content">
                            Deleniti dolorum fugit expedita maiores ipsam.
                        </p>
                    </div>
                    <div className="project__link">
                        <a href="#" className="link-effect text__content">View Demo</a>
                        <Link to="/projects/p1" className="link-effect text__content">
                        View Code
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
        <section>
            <div className="project">
                <ScrollAnimation animateIn="animate__rotateInUpRight" className="animate__animated" animateOnce={true}>
                    <div className="project__img">&nbsp;</div>
                </ScrollAnimation>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <p className="project__desc__text-h1 text__subheading">Project Name</p>
                        <p className="text__content">
                            Deleniti dolorum fugit expedita maiores ipsam.
                        </p>
                    </div>
                    <div className="project__link">
                        <a href="#" className="link-effect text__content">View Demo</a>
                        <Link to="/projects/p2" className="link-effect text__content">View Code
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </section>
}
export default Projects;