import "animate.css/animate.min.css";
import {Link} from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {
    return <section className="section-work" id="work">
        <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}>
        <div className="section-work__heading">
            <span className="arr-purple">&rarr;</span> Selected Work
        </div>
        </ScrollAnimation> 
        <section className="section-work__content">
            <div className="project">
                <ScrollAnimation animateIn="animate__rotateInUpLeft" className="animate__animated" animateOnce={true}>
                    <div className="project__img">&nbsp;</div>
                </ScrollAnimation>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <p className="project__desc__text-h1">Project Name</p>
                        <p className="project__desc__text-t1">
                            Deleniti dolorum fugit expedita maiores ipsam.
                        </p>
                    </div>
                    <div className="project__link">
                        <a href="#" className="project__link-l1 link-effect">View Demo</a>
                        <Link to="/projects/p1" className="project__link-l2 link-effect">
                        View Code
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
        <section className="section-work__content">
            <div className="project">
                <ScrollAnimation animateIn="animate__rotateInUpRight" className="animate__animated" animateOnce={true}>
                    <div className="project__img">&nbsp;</div>
                </ScrollAnimation>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <p className="project__desc__text-h1">Project Name</p>
                        <p className="project__desc__text-t1">
                            Deleniti dolorum fugit expedita maiores ipsam.
                        </p>
                    </div>
                    <div className="project__link">
                        <a href="#" className="project__link-l1 link-effect">View Demo</a>
                        <Link to="/projects/p2" className="project__link-l2 link-effect">View Code
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </section>
}
export default Projects;