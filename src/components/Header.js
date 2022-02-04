import React, { useState } from 'react';
import Slide from 'react-reveal/Slide'

function Header() {
      const [searching, setsearching] = useState(false);
      const [mobileMenu, setmobileMenu] = useState(false);
      const [darkmode, setDarkMode] = useState(false);

      let year = '2021'

      function changeMode() {
            setDarkMode(!darkmode)
            !darkmode ? document.body.style.backgroundColor = 'black' : document.body.style.backgroundColor = 'white'
      }

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
                        <a href="#1">ثبت آگهی <span className="free">رایگان</span></a>|
                        <button className="mode" onClick={() => changeMode()}>{!darkmode ? '🌙' : '☀️'
                              // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-moon" viewBox="0 0 16 16">
                              //       <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                              //       <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />
                              // </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16">
                              //       <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                              //       <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                              // </svg>
                        }</button>
                  </div>
                  <div className="header-logo">
                        <img src='./images/bamalogo.png' alt='logo' />
                  </div>
            </div>
            <div className={darkmode ? "header-mobile darkmobile" : "header-mobile"}>
                  <div className="header-mobile-btn-gp">
                        <div className='header-mobile-right-btns'>
                              <i class="bi bi-list" onClick={() => setmobileMenu(true)}></i>
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

            {mobileMenu && <div className='header-mobile-menu'>
                  <div className='header-mobile-menu1'>
                        <div><p onClick={() => setmobileMenu(false)} className='header-mobile-menu1-close'>X</p></div>
                        <div><p className='header-mobile-menu1-logo'>bama.ir</p></div>
                  </div>
                  <div className='header-mobile-menu2'>
                        <button className='mode' onClick={() => changeMode()}>{!darkmode ? '🌙' : '☀️'
                              // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-moon" viewBox="0 0 16 16">
                              //       <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                              //       <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />
                              // </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16">
                              //       <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                              //       <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                              // </svg>
                        }</button>
                        <p>ورود | ثبت نام</p>
                        <p>ثبت آگهی</p>
                        <p>خودرو</p>
                        <p>موتورسیکلت</p>
                        <p>ثبت‌نام نمایشگاه</p>
                        <p>تماس با ما</p>
                        <p>تبلیغات شرکت‌ها</p>
                        <p>قوانین سایت</p>
                        <p>فرصت‌های شغلی</p>
                  </div>
                  <div className='header-mobile-menu3'>
                        <div className='footer-description-menu'>
                              <p className='footer-date'>{`©${year} MGNet Co. Ltd.`}</p>
                        </div>
                        <div className='footer-social-menu'>
                              <a href="https://www.instagram.com/bama.social/"><i class="bi bi-instagram biSocial"></i></a>
                              <a href="https://twitter.com/bama_social"><i class="bi bi-twitter biSocial"></i></a>
                              <a href="https://www.linkedin.com//company/bama-social"><i class="bi bi-linkedin biSocial"></i></a>
                        </div>
                  </div>
            </div>}
      </div>;
}

export default Header;