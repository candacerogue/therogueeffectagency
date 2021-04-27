import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/rogue-effect-logo.png" alt="Digital Agency" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/rogue-effect-logo.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/rogue-effect-logo.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/rogue-effect-logo.png" alt="Digital Agency" />;
        }else{
            logoUrl = <img src="/assets/images/logo/rogue-effect-logo.png" alt="Digital Agency" />;
        }
        
        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper d-flex align-items-center justify-content-center text-center" id="header-wrapper">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><Link to="#">OFFER</Link>
                                    <ul className="submenu">
                                        <li><Link to="/main-demo">Main Demo</Link></li>
                                        <li><Link to="/dark-main-demo">Main Demo Dark</Link></li>
                                        <li><Link to="/creative-agency">Creative Agency</Link></li>
                                        <li><Link to="/creative-landing">Creative One Page</Link></li>
                                        <li><Link to="/creative-portfolio">Creative Portfolio</Link></li>
                                        <li><Link to="/personal-portfolio">Personal Portfolio</Link></li>
                                        <li><Link to="/portfolio-landing">Portfolio One Page</Link></li>
                                        <li><Link to="/dark-portfolio-landing">Portfolio One Page 02</Link></li>
                                        <li><Link to="/digital-agency">Digital Agency</Link></li>
                                        <li><Link to="/startup">Startup</Link></li>
                                        <li><Link to="/paralax">Paralax</Link></li>
                                        <li><Link to="/portfolio-home">Minimal Portfolio</Link></li>
                                        <li><Link to="/business">Business</Link></li>
                                        <li><Link to="/home-particles">Home Particles</Link></li>
                                        <li><Link to="/studio-agency">Studio Agency</Link></li>
                                        <li><Link to="/designer-portfolio">Designer Portfolio</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link to="/service" >FAQS</Link>
                                    <ul className="submenu">
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                    </ul>
                                </li>
                                <div className="logo" style={{maxWidth:"30%"}}>
                                    <a href="/">
                                        {logoUrl}
                                    </a>
                                </div>
                                <li><Link to="/about" >About</Link></li>
                                <li><Link to="/contact" >Contact</Link></li>
                            </ul>
                        </nav>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                </div>
            </header>
        )
    }
}
export default Header;