import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide'

function Homepage() {
      const [firstSlide, setfirstSlide] = useState(true);
      const [secondeSlide, setSecondeSlide] = useState(false);
      const [thirdSlide, setThirdSlide] = useState(false);
      const [timer, settimer] = useState(0);

      const [tab1, settab1] = useState(true);
      const [tab2, settab2] = useState(false);
      const [tab3, settab3] = useState(false);
      const [tab4, settab4] = useState(false);


      const [slideTap, setslideTap] = useState(true);
      const [desktopTap1, setdesktopTap1] = useState(false);
      const [desktopTap2, setdesktopTap2] = useState(false);
      const [desktopTap3, setdesktopTap3] = useState(false);
      const [desktopTap4, setdesktopTap4] = useState(false);

      function slideChange() {
            let counter = timer
            setInterval(() => {
                  counter++
                  return settimer(counter)
            }, 1000);
      }

      function selectedTab(tab) {
            if (tab === 'tab1') {
                  settab1(true);
                  settab2(false);
                  settab3(false);
                  settab4(false);
            } else if (tab === 'tab2') {
                  settab1(false);
                  settab2(true);
                  settab3(false);
                  settab4(false);
            } else if (tab === 'tab3') {
                  settab1(false);
                  settab2(false);
                  settab3(true);
                  settab4(false);
            } else if (tab === 'tab4') {
                  settab1(false);
                  settab2(false);
                  settab3(false);
                  settab4(true);
            }
      }

      function closeDesktopTab() {
            setslideTap(true)
            setdesktopTap1(false);
            setdesktopTap2(false);
            setdesktopTap3(false);
            setdesktopTap4(false);
      }

      function desktopTabSelected(tab) {
            console.log(tab);
            setslideTap(false)

            if (tab === 'tab1') {
                  setdesktopTap1(true);
                  setdesktopTap2(false);
                  setdesktopTap3(false);
                  setdesktopTap4(false);
            } else if (tab === 'tab2') {
                  setdesktopTap1(false);
                  setdesktopTap2(true);
                  setdesktopTap3(false);
                  setdesktopTap4(false);
            } else if (tab === 'tab3') {
                  setdesktopTap1(false);
                  setdesktopTap2(false);
                  setdesktopTap3(true);
                  setdesktopTap4(false);
            } else if (tab === 'tab4') {
                  setdesktopTap1(false);
                  setdesktopTap2(false);
                  setdesktopTap3(false);
                  setdesktopTap4(true);
            }
      }

      useEffect(() => {

            slideChange()

            if (timer >= 5 && timer < 10) {
                  setfirstSlide(false)
                  setSecondeSlide(true)
            }

            if (timer >= 10) {
                  setSecondeSlide(false)
                  setThirdSlide(true)
            }

      }, [timer, firstSlide, secondeSlide, thirdSlide]);

      return <div className="homepage">
            <div className="homepage-dektop">
                  <div className="homepage-tabs">
                        <div className='homepage-tab-section'>
                              <a href="#tab1" className={desktopTap1 ? 'active-desktop-tab' : 'tab'} onClick={() => desktopTabSelected('tab1')}>میانبر</a>
                              {!slideTap && desktopTap1 && <p className='remove-tab' onClick={() => closeDesktopTab()}>X</p>}
                        </div>
                        <div className='homepage-tab-section'>
                              <a href="#tab2" className={desktopTap2 ? 'active-desktop-tab' : 'tab'} onClick={() => desktopTabSelected('tab2')}>برند</a>
                              {!slideTap && desktopTap2 && <p className='remove-tab' onClick={() => closeDesktopTab()}>X</p>}
                        </div>
                        <div className='homepage-tab-section'>
                              <a href="#tab3" className={desktopTap3 ? 'active-desktop-tab' : 'tab'} onClick={() => desktopTabSelected('tab3')}>شاسی</a>
                              {!slideTap && desktopTap3 && <p className='remove-tab' onClick={() => closeDesktopTab()}>X</p>}
                        </div>
                        <div className='homepage-tab-section-tab4'>
                              <a href="#tab4" className={desktopTap4 ? 'active-desktop-tab' : 'tab'} onClick={() => desktopTabSelected('tab4')}>قیمت</a>
                              {!slideTap && desktopTap4 && <p className='remove-tab' onClick={() => closeDesktopTab()}>X</p>}
                        </div>
                  </div>
                  <div className={slideTap ? "homepage-details" : 'homepage-details-in-tab'}>
                        {slideTap && <div className='slide-show'>
                              {firstSlide && <Slide bottom>
                                    <div className="slide slide1">
                                          <div className='slide-container'>
                                                <div>
                                                      <p className='slide-title'>خرید خودرو</p>
                                                      <p className='slide-description'>جستجوی خودروهای صفر و کارکرده
                                                            <br />
                                                            بر اساس برند، شاسی و قیمت
                                                      </p>
                                                </div>
                                                <div className="slide-circle">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                                      </svg>
                                                </div>
                                          </div>
                                    </div>
                              </Slide>}
                              {secondeSlide && <Slide bottom>
                                    <div className="slide slide2">
                                          <div className='slide-container'>
                                                <div>
                                                      <p className='slide-title'>بررسی خودرو</p>
                                                      <p className='slide-description'>
                                                            مطالعه مشخصات فنی انواع خودرو
                                                            <br />
                                                            با امکان مقایسه
                                                      </p>
                                                </div>
                                                <div className="slide-circle">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-minecart bi-minecart-slide" viewBox="0 0 16 16">
                                                            <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z" />
                                                      </svg>
                                                </div>
                                          </div>
                                    </div>
                              </Slide>}
                              {thirdSlide && <Slide bottom>
                                    <div className="slide slide3">
                                          <div className='slide-container'>
                                                <div>
                                                      <p className='slide-title'>قیمت خودرو</p>
                                                      <p className='slide-description'>
                                                            اطلاع رسانی قیمت خودروهای صفر
                                                            <br />
                                                            بر روی نمودار
                                                      </p>
                                                </div>
                                                <div className="slide-circle">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                                                      </svg>
                                                </div>
                                          </div>
                                    </div>
                              </Slide>}
                              <div className='homepage-details-bottom'>
                                    <div>
                                          <p className='total-posts-title'>تعداد کل آگهی‌ها</p>
                                    </div>
                                    <div className='total-posts'>
                                          <p>1</p>
                                          <p>9</p>
                                          <p>4</p>
                                          <p>2</p>
                                          <p>3</p>
                                          <p>0</p>
                                    </div>
                              </div>
                        </div>}
                        <div className="homepage-desktop-selected-tab">
                              {desktopTap1 && <div>tab1</div>}
                              {desktopTap2 && <div>tab2</div>}
                              {desktopTap3 && <div>tab3</div>}
                              {desktopTap4 && <div>tab4</div>}
                        </div>
                  </div>
            </div>
            <div className="homepage-mobile">
                  <div className='homepage-mobile-tabs'>
                        <button className="homepage-mobile-tab" onClick={() => selectedTab('tab1')}>میانبر</button>
                        <button className="homepage-mobile-tab" onClick={() => selectedTab('tab2')}>برند</button>
                        <button className="homepage-mobile-tab" onClick={() => selectedTab('tab3')}>شاسی</button>
                        <button className="homepage-mobile-tab" onClick={() => selectedTab('tab4')}>قیمت</button>
                  </div>
                  <div className="homepage-mobile-content">
                        {tab1 && <div>tab 1</div>}
                        {tab2 && <div>tab 2</div>}
                        {tab3 && <div>tab 3</div>}
                        {tab4 && <div>tab 4</div>}
                  </div>
            </div>
      </div>;
}

export default Homepage;
