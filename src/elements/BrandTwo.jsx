import React, { Component } from "react";

class BrandTwo extends Component{
    render(){
        return(
            <React.Fragment>
                <h4 className="d-flex align-items-center justify-content-center text-center">CLIENTS SEEN IN</h4>
                <ul className="brand-style-2">
                    <li>
                        <img src="/assets/images/brand/brand-01.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/brand-02.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/brand-03.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/brand-04.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/brand-05.png" alt="Logo Images"/>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;