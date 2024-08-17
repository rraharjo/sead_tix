import React from "react";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";

export default function Footer() {
  return (
    <footer className="footer -type-1">
      <div className="footer__main">
        <div className="container">
          <div className="footer__content">
            <div className="row y-gap-10 justify-between">
              <div className="col-lg-auto">
                {/* <h4 className="text-20 fw-500">Contact</h4> */}

                {/* <div className="y-gap-10 mt-20">
                  <a className="d-block" href="#">
                    328 Queensberry Street, North Melbourne VIC3051, Australia.
                  </a>
                  <a className="d-block" href="#">
                    hi@seadtix.com
                  </a>
                </div> */}
                {/* <div className="col-auto"> */}
                  <div className="footerSocials">
                    <div className="footerSocials__title">Ikuti Kami</div>

                    <div className="footerSocials__icons">
                      <Socials />
                    </div>
                  </div>
                {/* </div> */}
              </div>

              <FooterLinks />

              {/* <div className="col-lg-3 col-md-6">
                <h4 className="text-20 fw-500">Newsletter</h4>
                <p className="mt-20">
                  Subscribe to the free newsletter and stay up to date
                </p>

                <div className="footer__newsletter">
                  <input type="Email" placeholder="Your email address" />
                  <button>Send</button>
                </div>

                <h4 className="text-20 fw-500">Mobile Apps</h4>

                <div className="mt-10">
                  <a className="d-flex items-center" href="#">
                    <i className="icon-apple text-16 mr-10"></i>
                    iOS App (soon)
                  </a>

                  <a className="d-flex items-center mt-10" href="#">
                    <i className="icon-android text-16 mr-10"></i>
                    Android App (available soon)
                  </a>
                </div>
              </div> */}
              <div className="col-lg-2">
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
        <div className="footer__bottom">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div>© Copyright Seadtix {new Date().getFullYear()}</div>
            </div>

            {/* <div className="col-auto">
              <div className="footer__images d-flex items-center x-gap-10">
                <Paymentcards />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      </div>

      
    </footer>
  );
}
