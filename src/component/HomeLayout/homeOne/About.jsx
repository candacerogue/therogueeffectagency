import React, { Component } from "react";
import { FiCheckSquare } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCheckSquare />,
        title: 'Business Stratagy'
    },
    {
        icon: <FiCheckSquare />,
        title: 'Website Development'
    },
    {
        icon: <FiCheckSquare />,
        title: 'Marketing & Reporting'
    },
    {
        icon: <FiCheckSquare />,
        title: 'Mobile App Development'
    }
]

const ServiceListTwo = [
    {
        icon: <FiCheckSquare />,
        title: 'Business Stratagy'
    },
    {
        icon: <FiCheckSquare />,
        title: 'Website Development'
    },
    {
        icon: <FiCheckSquare />,
        title: 'Marketing & Reporting'
    },
    {
        icon: <FiCheckSquare />,
        title: 'Mobile App Development'
    }
]

class About extends Component{
    render(){
        let title = 'about me',
        description = 'With 6+ years of UI/UX design and development experience, I know how your users think. Every user interaction is guided to your desired action. The Rogue Effect Agency and I will ensure the branding speaks to its audience and the client’s web presence encourages your users to stay, convert and engage. PERIODT. Your Resident Badass Candace Rogue',
        titleTwo = "things i recommend";
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-2.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="about-inner inner text-center bg_color--7" style={{padding:'60px', borderRadius:'60px'}}>
                                    <div className="section-title">
                                        <h3 className="title text-center">{title}</h3>
                                        <p className="description">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row--35 align-items-center bg_color--8" style={{opacity: '0.5', borderRadius:'60px'}}>
                            <div className="col-lg-12">
                                <h3 className="title text-center">{titleTwo}</h3>
                                     {/* Start Columns Area  */}
                                    <div className="rn-columns-area ptb--120">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="single-column">
                                                    {ServiceList.map( (val , i) => (
                                                        <div key={i}>
                                                            <a href="/service-details">
                                                                <div className="service service__style--2" style={{padding:'5px'}}>
                                                                    <div className="icon">
                                                                        <span>{val.icon}</span>
                                                                        <h3 className="title">{val.title}</h3>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    ))}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                                    <div className="single-column">
                                                    {ServiceListTwo.map( (val , i) => (
                                                        <div key={i}>
                                                            <a href="/service-details">
                                                                <div className="service service__style--2" style={{padding:'5px'}}>
                                                                    <div className="icon">
                                                                        <span>{val.icon}</span>
                                                                        <h3 className="title">{val.title}</h3>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Columns Area  */}
                                </div>
                            </div>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;