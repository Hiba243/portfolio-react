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
            <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}>
                <p className="text__content"><span className="arr-purple">&rarr;</span> Get In Touch</p>
            </ScrollAnimation>
         
            <p className="text__content">
                Drop me a line:&nbsp;
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
                            <p className="copy-click">hibafatima24@gmail.com</p>
                        </LightTooltip>
                    </CopyToClipboard>

            </p>
         
        </div>
        <div className="section-contact__social text__content">
            <p><a href="#" className="link-effect">LinkedIn</a></p>
            <p><a href="#" className="link-effect">Github</a></p>
        </div>
    </section>
}
export default Contact;