import React, { Component } from "react";

class SignatureProcess extends Component{
    render(){
        let title = 'Rogue',
        description = 'Your web strategy is lit, and we’re ready to spread it like wildfire. Development and a successful launch is the main objective in this mission. Ready?';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-7 col-md-12">
                                <div className="thumbnail" style={{position:"relative"}}>
                                    <img className="w-100" src="/assets/images/about/about-1.png" alt="About Images" style={{ zIndex:"1"}}/>
                                    <a className="rn-button-style--2 btn-primary-color" style={{marginLeft:"-140px", marginTop:"70%", position:"absolute", zIndex:"1000"}} href="">book call</a>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12">
                                <div className="about-inner inner text-center">
                                    <div className="section-title">
                                        <div className="thumbnail">
                                            <img className="w-100" src="/assets/images/about/down-left-arrow.png" alt="down left arrow" style={{maxWidth:"20%", margin:"30px"}}/>
                                        </div>
                                        <h3 className="title text-center">{title}</h3>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10 d-flex align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <img className="w-100" src="/assets/images/about/left-arrow.png" alt="left arrow"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default SignatureProcess;