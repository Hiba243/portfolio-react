import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from '@material-ui/core/styles';
import React, { useState } from "react";

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 20,
    },
}))(Tooltip);

const Contact = () => {

    const [copiedText, setCopiedText] = useState();

    return <section className="section-contact section-padding" id="contact">
        <div className="section-contact__content">
            {/* <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}> */}
                <p className="text__subheading"><span className="arr-purple">&rarr;</span> Get In Touch</p>
            {/* </ScrollAnimation> */}
            <div className="section-contact__content-email">
            <p className="text__subheading">
                Drop me a mail:&nbsp;</p>
                
                <CopyToClipboard
                    text={"hibafatima24@gmail.com"}
                    onCopy={() => setCopiedText("hibafatima24@gmail.com")}
                >
                    <LightTooltip
                        title={
                            copiedText === "hibafatima24@gmail.com"
                                ? "✔ Copied to clipboard"
                                : "Click to copy"
                        }
                        placement="top"
                        onClose={() => setCopiedText("")}
                    >
                        <p className="copy-click text__subheading">hibafatima24@gmail.com</p>
                    </LightTooltip>
                </CopyToClipboard>         
            </div>
        </div>
        <div className="section-contact__social text__subheading">
            <p><a href="#" className="link-effect">LinkedIn</a></p>
            <p><a href="#" className="link-effect">Github</a></p>
        </div>
    </section>
    
}

export default Contact;