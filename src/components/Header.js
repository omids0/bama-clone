import React from 'react';
import Slide from 'react-reveal/Slide'

function Header() {
      return <div className="header">
            <div className="header-desktop">
                  <div className="header-vehicles">
                        <a href="#">خودرو</a>|
                        <a href="#">موتورسیکلت</a>|
                        <a href="#">باما</a>
                  </div>
                  <div className="header-search">
                        <input type="text" placeholder='جستجو'></input>
                  </div>
                  <div className="header-customer">
                        <a href="#">ورود</a>|
                        <a href="#">ثبت آگهی <span className="free">رایگان</span></a>
                  </div>
                  <div className="header-logo">
                        <img src='./images/download.png'></img>
                  </div>
            </div>
            <div className="header-mobile">
                  <div className="header-mobile-btn-gp">
                        <div className='header-mobile-right-btns'>
                              <i class="bi bi-list"></i>
                              <a className="save-free" href='#'>
                                    ثبت آگهی <span className="free">رایگان</span>
                              </a>
                        </div>
                        <div>
                              <img className='mobile-logo' src='./images/mobile-icone.png' alt='logo' />
                        </div>
                  </div>
                  <div className='header-mobile-search'>
                        <Slide right>
                              <input type="text" placeholder='جستجو' />
                        </Slide>
                  </div>
                  <div className='header-mobile-part3'>
                        <span> 32.485</span>آگهی خودرو
                  </div>
            </div>
      </div>;
}

export default Header;