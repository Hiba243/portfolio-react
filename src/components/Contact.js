const Contact = () => {
    return <section className="section-contact" id="contact">
        <div className="section-contact__content">
            <p><span className="arr-purple">&rarr;</span> Get In Touch</p>
            <p>
                Drop me a line:
        <a
                    href=""
                    className="copy-click"
                    data-tooltip-text="Click to copy"
                    data-tooltip-text-copied="✔ Copied to clipboard"
                >xyz@gmail.com</a
                >
            </p>
        </div>
        <div className="section-contact__social">
            <p><a href="#" className="link-effect">LinkedIn</a></p>
            <p><a href="#" className="link-effect">Github</a></p>
        </div>
    </section>
}
export default Contact;