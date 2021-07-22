import "animate.css/animate.min.css";
import React, { useState } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 20,
    },
}))(Tooltip);

const LandingPage = () => {

    const [copiedText, setCopiedText] = useState();
    return (
        <section className="section-padding">
            {/* <ScrollAnimation animateIn="animate__fadeInLeft" className="animate__animated" animateOnce={true}> */}
                <div className="text__heading landing-page-heading">
                    <span className="arr-purple">&rarr;</span> I’m Hiba Fatima, a web
                    developer who builds and designs web applications and websites. At the
                    intersection of functionality and aesthetics, lorem ipsum dolor sit
                    iusto eveniet quae aperiam ipsum. Let’s make something great!&nbsp;
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

                </div>
            {/* </ScrollAnimation> */}
        </section>
    );

};

export default LandingPage;