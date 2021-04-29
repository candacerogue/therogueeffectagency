import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import ServiceOne from "../elements/service/ServiceOne";
import BrandTwo from "../elements/BrandTwo";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
// import Accordion01 from "../elements/Accordion";
import { FiCheck, FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import About from "../component/HomeLayout/homeOne/About";
import SignatureProcess from "../component/HomeLayout/homeOne/SignatureProcess";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const SlideList = [
    {
        textPosition: 'text-right',
        category: '',
        title: '',
        description: '',
        buttonText: 'book now',
        buttonLink: '/contact'
    }
]

class Business extends Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
    

        return(
            <Fragment> 
                <Helmet pageTitle="The Rogue Effect Agency Home" />
                
                {/* Start Header Area  */}
                    <Header />
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--1" key={index}>
                            <div className="container slide slide-style-2 d-flex align-items-center justify-content-center bg_image bg_image--2" style={{backgroundSize: "100%"}}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
                {/* End Slider Area   */}
                
                {/* Start Clients Seen In Area */}
                <div className="rn-brand-area bg_color--6 ptb--60">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Clients Seen In Area */}

                {/* Start Tagline Area  */}
                <div className="rn-columns-area ptb--120 bg_color--7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single-column">
                                    <h2 className="tilte">ARE YOU A DIRECT OR ANCILLARY CANNABIS BUSINESS?</h2>
                                    <h1>WE CURATE <br></br>MINORITY <br></br> AND ALLY OWNED <br></br>CANNAPRENEUR’S<br></br>WEB PRESENCE</h1>
                                </div>
                            </div>
                        </div>
                        <div className="slide-btn">
                            <a className="rn-button-style--2 btn-primary-color" target="_blank" without rel="noopener noreferrer" href="https://hello.dubsado.com:443/public/form/view/602ecf15ed2c17126a93fe00">learn more</a>
                        </div>
                    </div>
                </div>
                {/* End Tagline Area  */}

                {/* Start Positioning Area  */}
                 <div className="rn-columns-area ptb--120 bg_color--5 d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 bg_image bg_image--3">
                                <div className="single-column">
                                    <img className="w-100" src="/assets/images/bg/ipad-mockup.png" alt="Ipad Mockup"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                <div className="single-column">
                                    <h1 className="tilte">LET YOUR BRAND’S <span>VIBE</span> TRIBE...</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <div className="single-column"></div>
                                    <h2>THE CANNA PRODUCTS AND SERVICES YOU’RE RELEASING ARE FIRE, BUT THE BRANDING DOES NOT MATCH THE FUEGO...</h2>
                                </div>
                        </div>
                        <div className="service-wrapper service-white text-center">
                            <ServiceOne />
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <div className="single-column"></div>
                                    <h3>LET’S MATCH THE AMAZING ENERGY YOU PUT INTO YOUR BUSINESS WITH A BRAND AESTHETIC TO MATCH.</h3>
                            </div>
                            <div className="slide-btn" style={{margin:"auto"}}>
                                <a className="rn-button-style--2 btn-primary-color" target="_blank" without rel="noopener noreferrer" href="https://hello.dubsado.com:443/public/form/view/602ecf15ed2c17126a93fe00">ready?</a>
                                <p>like yesterday...</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Positioning Area  */}

                {/* Start Signature Process Area */}
                <div className="rn-about-area ptb--120 bg_color--6">
                    <div className="container">
                        <div className="about-area about-position-top pb--120">
                            <SignatureProcess />
                        </div>
                    </div>
                </div>
                {/* End Signature Process Area */}

                {/* Start Transformation Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--30 mb_sm--0">
                                    <h2 className="title">ARE YOU READY FOR A...</h2>
                                    <img className="w-100" src="/assets/images/transformation.gif" alt="Transformation GIF"/>
                                    <a className="rn-button-style--2 btn-primary-color" target="_blank" without rel="noopener noreferrer" href="https://hello.dubsado.com:443/public/form/view/602ecf15ed2c17126a93fe00">learn more</a>
                                    <p>i thought you’d never ask!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                {/* <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" /> */}
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Transformation Area  */}

                {/* Start Testimonial Area  */}
                <div className="rn-about-area ptb--120 bg_color--4 bg_image bg_image--5" style={{backgroundSize:"42%", backgroundRepeat:"no-repeat", backgroundPosition:"top right"}}>
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <h2 className="title">Shine light on client’s thoughts... </h2>
                                    <img className="w-100" src="/assets/images/about/about-4.png" alt="Chelsea's Thumbnail" style={{maxWidth:"500px"}}/>
                                    <h5>chelsea callendar CEO of DankSweets</h5>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-inner inner">
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--30 mb_sm--0">
                                    <h2 className="title">“WORKING WITH CANDACE HAS BEEN A DREAM COME TRUE.”.</h2>
                                    <p>Not all designers are able to bring to life and execute your vision but she truly has a gift. Not only is her website design incredible but her logo work and overall artistry and creativity is next-level. She is prompt and professional and is willing to answer any question you may have. She is very patient and gracious and truly knows her stuff!! You will absolutely not be disappointed in choosing Candace for any creative endeavor.</p>
                                    <a className="rn-button-style--2 btn-primary-color" target="_blank" without rel="noopener noreferrer" href="https://hello.dubsado.com:443/public/form/view/602ecf15ed2c17126a93fe00">learn more</a>
                                    <p>i thought you’d never ask!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Testimonial Area  */}

                
                {/* Start Quote Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg-image bg_image--6" style={{backgroundSize:"100%", backgroundRepeat:"no-repeat", backgroundPosition:"top center"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--30 mb_sm--0">
                                    <h2 className="title">“SOMETHING HELLA PROFOUND HERE AND ADD SOME SEASONING TO IT”</h2>
                                    <h3>-Candace Rogue</h3>
                                    <a className="rn-button-style--2 btn-primary-color" target="_blank" without rel="noopener noreferrer" href="https://hello.dubsado.com:443/public/form/view/602ecf15ed2c17126a93fe00">learn more</a>
                                    <p>i thought you’d never ask!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                {/* <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" /> */}
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Quote Area  */}

                {/* Start About Area  */}
                <div className="rn-about-area bg-image bg_image--7" style={{backgroundSize:"100%", backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
                    <div className="container">
                        <div className="about-area about-position-top pb--120" style={{position:"relative", top:"-75px"}}>
                            <About/>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}
                
                {/* Start Pricing Table Area  */}
                <div className="bg-image bg_image--8" style={{backgroundSize:"contain"}}>
                <div className="rn-pricing-table-area ptb--120 bg_color--9">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single-column text-center">
                                    <h1>The Signature Offer</h1>
                                    <h3 className="title">ARE YOU A DIRECT OR ANCILLARY CANNABIS BUSINESS?</h3>
                                    <h4>INVESTMENT: 3 PAYMENTS OF $1,845 TIMEFRAME: 10-16 WEEKS</h4>
                                    <p>Cupcake ipsum dolor. Sit amet carrot cake chocolate bar tootsie roll sugar plum. Tart bear claw marzipan. Cake bonbon tiramisu donut soufflé powder caramels danish.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Start Pricing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h3 className="title">brand<br></br>strategy</h3>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 1:1 Brand Strategy Workshop + Recording</li>
                                                <li><FiCheck /> Brand Message, Values & Personality</li>
                                                <li><FiCheck /> Brand Aesthetic & Color Story (Mood Board)</li>
                                                <li><FiCheck /> Brand Identity Concepts</li>
                                                <li><FiCheck /> Logo Suite Development</li>
                                                <li><FiCheck /> Visual Identity Guide</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Pricing Table Area  */}

                            {/* Start Pricing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h3 className="title">web<br></br>design</h3>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> Brand Photoshoot Strategy</li>
                                                <li><FiCheck /> Choice of CMS (Wordpress, Shopify or WIX)</li>
                                                <li><FiCheck /> Up to 7 pages of Wireframes</li>
                                                <li><FiCheck /> Up to 7 pages of Mock-ups</li>
                                                <li><FiCheck /> Website Copy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Pricing Table Area  */}

                            {/* Start Pricing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h3 className="title">web<br></br>development</h3>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> Up to 7 pages developed on CMS agreed upon</li>
                                                <li><FiCheck /> Up to 3 blogs uploaded</li>
                                                <li><FiCheck /> Up to 10 products uploaded</li>
                                                <li><FiCheck /> 1 payment gateway integration</li>
                                                <li><FiCheck /> Email Marketing set up (ConvertKit or MailChimp)</li>
                                                <li><FiCheck /> 1 month of website support</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Pricing Table Area  */}
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single-column text-center">
                                    <a className="rn-btn" href="#pricing">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* End Pricing Table Area  */}

                {/* Start Faq Area */}
                <div className="faq bg-image bg_image--9" id="no-excuse-faq" style={{position:"relative", backgroundSize:"contain", opacity:".9"}}>
                        <div className="pv-feaq-area ptb--120 bg-image bg_image--10" style={{backgroundSize:"70%", backgroundRepeat:"no-repeat", backgroundPosition:"bottom right"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2" style={{position:"absolute", top: "0"}}>
                                        <div className="section-title text-left pb--30">
                                        <div className="faq-heading text-left">
                                            <h2>FAQ</h2>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="rn-columns-area ptb--40">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-7 col-md-7 col-12">
                                                        <div className="single-column">
                                                            <div className="faq-area">
                                                                <Accordion className="accodion-style--1" preExpanded={'0'}>
                                                                <h3>General</h3>
                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                What do I need to get started?
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>You need a Canva account, Jot Form account, purchased domain, and a payment gateway (i.e. PayPal Business, Stripe). Once you have signed up for these platforms, you're ready to get going with the kit!</p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>

                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                Can I customize and add my own brand colors, fonts, and images?
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>You sure can! Once you copy the template to your Canva account, you will have the freedom to customize every single element in these templates.</p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>

                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                Can I use this template in a CMS like Wordpress, Shopify, Squarespace, or my own hosting platform?
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>These templates are stand alone landing pages with images and links. So you won't be able to import these template designs into your website on your own hosting platform. However, you will be able to forward your custom domain to the customized template or include a tab on your site that links to the landing page templates.</p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                Can I use a custom domain?
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>Yup! You can <stong>forward </stong> your custom domain to the link that is created once you 'Publish as Website'. I teach you exactly how to do it. OR if you buy the platinum package, I will connect the custom domain to your landing page myself! Please keep in mind that forwarding your custom domain to the Canva template url does not mean that the template's url changes.</p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>

                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                How long does it take to launch my landing page after buying?
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>Less than day! I have even gotten a client set up in just 3 hours from start to finish! Please also keep in mind, that after forwarding your custom domain to the template location it can take up to 48 hours for your DNS to propogate depending on your domain/hosting provider.</p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>

                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                Can I use this as an e-commerce website?
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>These templates are perfect for budding entrepreneurs who have any of, but not limited to, the following goals:</p>
                                                                                <ul>
                                                                                    <li>Landing pages</li>
                                                                                    <li>Sales pages</li>
                                                                                    <li>Brand awareness of physical products & services</li>
                                                                                    <li>Adverstisement of a course, lead generation/email capture or product</li>
                                                                                </ul> 
                                                                            <p>I would not recommend using these templates for an ecommerce website selling more than 3-5 products/services. These templates allow you to share your message, promote your products, present offers, generate leads, AND sell your services & products.</p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                Are these templates made on the Canva platform?
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>Yes, most of the graphic assets were created in Adobe CC and then uploaded to the Canva platform to create a beautiful layout.</p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                How can I get the tech support for work completed?
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>If I have completed some work and you need technical maintenance/assistance, please reach out to me directly at <a href="mailto:candace@candacerogue.com" className="special-caps" style={{ color:'#3B2317'}}>candace@candacerogue.com</a>.</p>
                                                                            <p>If you need technical maintenance/assistance completed by another professional, please book some time on my calendar <a href="https://calendly.com/candacerogue/dev" target="_blank" rel="noopener noreferrer" className="special-caps" style={{ color:'#3B2317'}}>here</a> for us to connect and speak through your issues!</p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>
                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                Does Canva host these website templates? 
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>Canva does not host or house websites. It does house links attached to your Canva website template. </p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>
                                                                <br/>    
                                                                <h3>Payment & Refund Policies</h3>
                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                What happens after I purchase my template?
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>Open the digital downlad forwarded to you after purchase. In the folder, you'll find a PDF labeled "Shortcuts" with clickable links. Use these links to assist you in copying the original template, creating a jot form, customizing the template, and connecting your template to jot form and your domain. </p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>

                                                                    <AccordionItem>
                                                                        <AccordionItemHeading>
                                                                            <AccordionItemButton>
                                                                                Do you take refunds for these productss?
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <p>Due to the quality of work and delivery of these templates, I do not offer refunds. If you need assistance moving forward with these templates, please feel free to hit me up at <a href="mailto:candace@candacerogue.com" className="special-caps" style={{ color:'#3B2317'}}>candace@candacerogue.com</a></p>
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>

                                                                </Accordion>
                                                                <h1>LET’S LOCK IN A DATE.</h1>
                                                                <a className="rn-btn" href="#pricing">learn more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-5 col-12 mt_sm--30">
                                                        <div className="single-column">
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>        
                        </div>
                    </div>
                    {/* End Faq Area */}


                {/* Start Freebie Area */}
                <div className="rn-blog-area pt--120 pb--80 bg_color--6 bg-image bg_image--11" style={{backgroundSize:"60%", backgroundRepeat:"no-repeat", backgroundPosition:"top left", height:"100vh"}}>
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-right">
                                    <h3 className="title">where are you in your cannapreneur journey?</h3>
                                    <h4>Cop your free copy of the “No More Instagram DM” selling</h4>
                                    <p style={{textAlign:"right", padding:"0", maxWidth:"50%", marginLeft:"50%"}}>Cupcake ipsum dolor. Sit amet carrot cake chocolate bar tootsie roll sugar plum. Tart bear claw marzipan. Cake bonbon tiramisu donut soufflé powder caramels danish.</p>
                                    <a className="rn-button-style--2 btn-primary-color" target="_blank" without rel="noopener noreferrer" href="https://winning-maker-8622.ck.page/8c1c692d5c">download</a>
                                </div>
                            </div>
                        </div>   
                    </div>    
                </div>
                {/* End Freebie Area */}

                {/* Start Footer Style  */}
                <Footer />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default Business;