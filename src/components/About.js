import Slide from 'react-reveal/Slide';
const About = () => {
    return <section className="section-about" id="about">
        <div className="ab-cont">
        <Slide left>
            <div className="section-about__heading">
                <p className="section-about__heading__text anm-moveDown">
                    <span className="arr-purple">&rarr;</span> About Me
        </p>
            </div>
            </Slide>
            <div className="section-about__content">
                <div className="section-about__content__text">
                    <div className="section-about__content__text-1 anm-moveDown">
                        I'm a web developer at Deloitte USI. In my spare time, I'm
                        working on side projects to learn more and delve deeper into the
                        world of full-stack web development. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Proin sed libero enim sed
                        faucibus. Nec ultrices dui sapien eget mi proin sed libero enim.
                        Aenean sed adipiscing diam donec adipiscing tristique risus nec
                        feugiat.
          </div>
                </div>
            </div>
        </div>
        <div className="ski-cont">
        <Slide left>
            <div className="section-about__heading">
                <p className="section-about__heading__text anm-moveDown">
                    <span className="arr-purple">&rarr;</span> My Toolkit
        </p>
            </div>
            </Slide>
            <div className="section-about__skills">
                <div>HTML</div>
                <div>HTML</div>
                <div>HTML</div>
                <div>HTML</div>
                <div>HTML</div>
                <div>HTML</div>
                <div>HTML</div>
                <div>HTML</div>
                <div>HTML</div>
            </div>
        </div>
    </section>

}
export default About;