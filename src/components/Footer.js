import React from 'react';

function Footer() {
      let year = '2021'

      return <div className='footer'>
            <div className='footer-social'>
                  <a href="https://www.instagram.com/bama.social/"><i class="bi bi-instagram"></i></a>
                  <a href="https://twitter.com/bama_social"><i class="bi bi-twitter"></i></a>
                  <a href="https://www.linkedin.com//company/bama-social"><i class="bi bi-linkedin"></i></a>
            </div>
            <div className='footer-description'>
                  <p className='footer-date'>{`©${year} MGNet Co. Ltd.`}</p>
            </div>
      </div>;
}

export default Footer;
