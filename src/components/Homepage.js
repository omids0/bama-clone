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
                              <a href="#tab1" className='tab' onClick={() => desktopTabSelected('tab1')}>میانبر</a>
                              {!slideTap && desktopTap1 && <p className='remove-tab' onClick={()=> closeDesktopTab()}>X</p>}
                        </div>
                        <div className='homepage-tab-section'>
                              <a href="#tab2" className='tab' onClick={() => desktopTabSelected('tab2')}>برند</a>
                              {!slideTap && desktopTap2 && <p className='remove-tab' onClick={()=> closeDesktopTab()}>X</p>}
                        </div>
                        <div className='homepage-tab-section'>
                              <a href="#tab3" className='tab' onClick={() => desktopTabSelected('tab3')}>شاسی</a>
                              {!slideTap && desktopTap3 && <p className='remove-tab' onClick={()=> closeDesktopTab()}>X</p>}
                        </div>
                        <div className='homepage-tab-section-tab4'>
                              <a href="#tab4" className='tab' onClick={() => desktopTabSelected('tab4')}>قیمت</a>
                              {!slideTap && desktopTap4 && <p className='remove-tab' onClick={()=> closeDesktopTab()}>X</p>}
                        </div>
                  </div>
                  <div className="homepage-details">
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
                                                <div className="slide-circle"></div>
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
                                                <div className="slide-circle"></div>
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
                                                <div className="slide-circle"></div>
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
