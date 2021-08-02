import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {

    return <section className="section-padding section-work" id="work">
        <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}>
            <div className="text__heading">
                <span className="arr-purple">&rarr;</span> Selected Work
            </div>
        </ScrollAnimation>
        <Link to="/projects/p1">
            <section>

                <div className="project">
                    {/* <ScrollAnimation animateIn="animate__rotateInUpLeft" className="animate__animated" animateOnce={true}> */}
                    <div className="project__img">&nbsp;</div>
                    {/* </ScrollAnimation> */}
                    <div className="project__desc">
                        <div className="project__desc-content">
                            <p className="project__desc-content-h1 text__content">Project Name - Proj Desc</p>
                            <div className="text__content">
                                <p className="project__desc-content-feat">React | Firebase</p>
                            </div>
                        </div>
                        <div className="project__link">
                            <a href="#" className="link-effect text__content">Go To Project &rarr;</a>
                            <p Link to="/projects/p1" className="link-effect text__content">
                                View Code &rarr;
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <hr className="project-hr" />
        </Link>
        <section>
            <Link to="projects/p1">
                <div className="project">
                    {/* <ScrollAnimation animateIn="animate__rotateInUpRight" className="animate__animated" animateOnce={true}> */}
                    <div className="project__img">&nbsp;</div>
                    {/* </ScrollAnimation> */}
                    <div className="project__desc">
                        <div className="project__desc-content">
                            <p className="project__desc-content-h1 text__content">Project Name - Proj Desc</p>
                            <div className="text__content">
                                <p className="project__desc-content-feat">React | Firebase</p>
                            </div>
                        </div>
                        <div className="project__link">
                            <a href="#" className="link-effect text__content">Go To Project &rarr;</a>
                            <p href="/projects/p1" className="link-effect text__content">
                                View Code &rarr;
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    </section>

}

export default Projects;