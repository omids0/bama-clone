import React from 'react';
import Slide from 'react-reveal/Slide'

function Header() {
      return <div className="header">
            <div className="header-desktop">
                  <div className="header-vehicles">
                        <div className="dropdown">
                              <a href="#" className="dropbtn">خودرو</a>|
                              <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                              </div>
                        </div>
                        <div className="dropdown">
                              <a href="#" className="dropbtn">موتورسیکلت</a>|
                              <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                              </div>
                        </div>
                        <div className="dropdown">
                              <a href="#" className="dropbtn">باما</a>
                              <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                              </div>
                        </div>
                  </div>
                  <div className="header-search">
                        <input type="text" placeholder='جستجو'></input>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
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