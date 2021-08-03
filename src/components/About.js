import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {

    return <section className="section-about section-padding" id="about">
        <div className="section-about__about">
            {/* <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}> */}
                <div className="text__heading ">
                    <span className="arr-purple">&rarr;</span> About Me
                </div>
            {/* </ScrollAnimation> */}
            <div className="section-about__about-content">

                <div className="text__content">
                    I'm a web developer at Deloitte USI. In my spare time, I'm
                    working on side projects to learn more and delve deeper into the
                    world of full-stack web development.
                </div>
                <div className="text__content">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Proin sed libero enim sed
                    faucibus.
                </div>
                <div className="text__content">
                    Nec ultrices dui sapien eget mi proin sed libero enim.
                    Aenean sed adipiscing diam donec adipiscing tristique risus nec
                    feugiat.
                </div>
                <div className="text__content">
                    Nec ultrices dui sapien eget mi proin sed libero enim.
                    Aenean sed adipiscing diam donec adipiscing tristique risus nec
                    feugiat.
                </div>
            </div>
        </div>
        <div className="section-about__skills">
            <div className="section-about__skills-1">
                {/* <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}> */}
                    <div className="text__heading">
                        <span className="arr-purple">&rarr;</span> What I Do
                    </div>
                {/* </ScrollAnimation> */}
                <div className="section-about__skills-content text__content">
                    <div className="color-purple">HTML</div>
                    <div className="color-purple">HTML</div>
                    <div className="color-purple">HTML</div>
                    <div className="color-purple">HTML</div>
                    <div className="color-purple">HTML</div>
                    <div className="color-yellow">HTML</div>
                    <div className="color-yellow">HTML</div>
                    <div className="color-yellow">HTML</div>
                    <div className="color-yellow">HTML</div>
                </div>
            </div>
            <div className="section-about__skills-2">
                {/* <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}> */}
                    <div className="text__heading">
                        <span className="arr-purple">&rarr;</span> My Toolkit
                    </div>
                {/* </ScrollAnimation> */}
                <div className="section-about__skills-content text__content">
                    <div className="color-purple">HTML</div>
                    <div className="color-purple">HTML</div>
                    <div className="color-purple">HTML</div>
                    <div className="color-purple">HTML</div>
                    <div className="color-purple">HTML</div>
                    <div className="color-yellow">HTML</div>
                    <div className="color-yellow">HTML</div>
                    <div className="color-yellow">HTML</div>
                    <div className="color-yellow">HTML</div>
                </div>
            </div>
        </div>
    </section>

}

export default About;