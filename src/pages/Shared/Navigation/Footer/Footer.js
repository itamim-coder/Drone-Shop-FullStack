
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-5">
             
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Our Location</h6>
            <p class="text-justify">
            We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.

              121 King Street, Melbourne,

              Victoria 3000 Australia

              E: hello@yourdomain.com

              P: +12 9 8765 4321</p>
          </div>

          <div class="col-xs-6 col-md-3">
                  <h6>  Working Time</h6> <br />
          Mon - Wed - 9:00 AM - 7:00 PM

          Thursday - 9:00 AM - 6:30 PM

          Friday - 9:00 AM - 6:00 PM

          Sat - Sun - Closed
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Contribute</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Drone Shop</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        </div>
    );
};

export default Footer;