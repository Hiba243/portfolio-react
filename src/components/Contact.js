import Slide from 'react-reveal/Slide';

const Contact = () => {
    return <section className="section-contact" id="contact">
        <div className="section-contact__content">
            <Slide left><p><span className="arr-purple">&rarr;</span> Get In Touch</p></Slide>
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