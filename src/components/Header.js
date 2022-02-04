import React, { useState } from 'react';
import Slide from 'react-reveal/Slide'

function Header() {
      const [searching, setsearching] = useState(false);
      const [mobileMenu, setmobileMenu] = useState(true);

      return <div className="header">
            <div className="header-desktop">
                  <div className="header-vehicles">
                        <div className="dropdown">
                              <a href="#1" className="dropbtn header-car">خودرو</a>|
                              <div class="dropdown-content">
                                    <a href="#1">خرید خودرو</a>
                                    <a href="#2">ثبت آگهی خودرو</a>
                                    <a href="#3">قیمت روز خودرو</a>
                                    <a href="#1">اخبار خودرو</a>
                                    <a href="#2">مشخصات فنی خودرو</a>
                                    <a href="#3">گوش به زنگ خودرو</a>
                                    <a href="#3">کمپانی‌های خودرو</a>
                              </div>
                        </div>
                        <div className="dropdown">
                              <a href="#2" className="dropbtn">موتورسیکلت</a>|
                              <div class="dropdown-content">
                                    <a href="#1">خرید موتورسیکلت</a>
                                    <a href="#2">ثبت آگهی موتورسیکلت</a>
                                    <a href="#3">اخبار موتورسیکلت</a>
                                    <a href="#3">گوشی به زنگ موتورسیکلت</a>
                              </div>
                        </div>
                        <div className="dropdown">
                              <a href="#3" className="dropbtn">باما</a>
                              <div class="dropdown-content">
                                    <a href="#1">ثبت‌نام نمایشگاه</a>
                                    <a href="#2">تماس باما</a>
                                    <a href="#3">تبلیغات شرکت‌ها</a>
                                    <a href="#1">قوانین سایت</a>
                                    <a href="#2">فرصت‌های شغلی</a>
                                    <a href="#3">درباره ما</a>
                              </div>
                        </div>
                  </div>
                  <div className="header-search">
                        <input type="text" placeholder='جستجو' onClick={() => setsearching(true)} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                  </div>
                  <div className="header-customer">
                        <a href="#1">ورود</a>|
                        <a href="#1">ثبت آگهی <span className="free">رایگان</span></a>
                  </div>
                  <div className="header-logo">
                        <img src='./images/download.png' alt='logo' />
                  </div>
            </div>
            <div className="header-mobile">
                  {mobileMenu && <div className='header-mobile-menu'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                  </div>}
                  <div className="header-mobile-btn-gp">
                        <div className='header-mobile-right-btns'>
                              <i class="bi bi-list"></i>
                              <a className="save-free" href='#1'>
                                    ثبت آگهی <span className="free">رایگان</span>
                              </a>
                        </div>
                        <div>
                              <img className='mobile-logo' src='./images/mobile-icone.png' alt='logo' />
                        </div>
                  </div>
                  <div className='header-mobile-search'>
                        <Slide right>
                              <input type="text" placeholder='جستجو' onClick={() => setsearching(true)} />
                        </Slide>
                  </div>
                  <div className='header-mobile-part3'>
                        <span> 32.485</span>آگهی خودرو
                  </div>
            </div>
            {searching && <div className='searching'>
                  <div className='searching-body'>
                        <div className='searching-head'>
                              <div className='searching-head-right'>
                                    <p onClick={() => setsearching(false)} className='searching-close'>X</p>
                                    <Slide left>
                                          <input className='searching-input' type="text" />
                                    </Slide>
                              </div>
                              <div className='searching-logo-mobile'>
                                    <Slide top>
                                          <p className='searching-logo'>bama.ir</p>
                                    </Slide>
                              </div>
                        </div>
                        <div className='searching-detailes'>
                              <div><p className='searching-result'>آگهی ها</p></div>
                              <div className='searching1'></div>
                              <div className='searching2'></div>
                              <div className='searching3'></div>
                        </div>
                  </div>
            </div>}
      </div>;
}

export default Header;