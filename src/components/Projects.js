import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';

const Projects = () => {
    return <section className="section-work" id="work">
          <Slide left>
        <div className="section-work__heading">
            <p className="section-work__heading__text anm-moveDown">
                <span className="arr-purple">&rarr;</span> Selected Work
          </p>
        </div>
        </Slide>
        <section className="section-work__content">
            <div className="project project-p1">
                <Roll left>
                <div className="project__img anm-moveRight">img</div>
                </Roll>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <p className="project__desc__text-h1">Project Name</p>
                        <p className="project__desc__text-t1">
                            Deleniti dolorum fugit expedita maiores ipsam.
                </p>
                    </div>
                    <div className="project__link">
                        <a href="#" className="project__link-l1 link-effect">View Demo</a>
                        <a href="#" className="project__link-l2 link-effect">View Code</a>
                    </div>
                </div>
            </div>
        </section>
        <hr className="anm-hr" />
        <section className="section-work__content">
            <div className="project project-p1">
            <Roll right>
                <div className="project__img anm-moveLeft">img</div>
                </Roll>
                <div className="project__desc">
                    <div className="project__desc-content">
                        <p className="project__desc__text-h1">Project Name</p>
                        <p className="project__desc__text-t1">
                            Deleniti dolorum fugit expedita maiores ipsam.
                </p>
                    </div>
                    <div className="project__link">
                        <a href="#" className="project__link-l1 link-effect">View Demo</a>
                        <a href="#" className="project__link-l2 link-effect">View Code</a>
                    </div>
                </div>
            </div>
        </section>
    </section>

}
export default Projects;