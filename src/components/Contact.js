import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {
    return <section className="section-contact" id="contact">
        <div className="section-contact__content">
            <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}>
                <p><span className="arr-purple">&rarr;</span> Get In Touch</p>
            </ScrollAnimation>
            <p>
                Drop me a line:&nbsp;
                <a href="#" className="copy-click">xyz@gmail.com</a>
            </p>
        </div>
        <div className="section-contact__social">
            <p><a href="#" className="link-effect">LinkedIn</a></p>
            <p><a href="#" className="link-effect">Github</a></p>
        </div>
    </section>
}
export default Contact;