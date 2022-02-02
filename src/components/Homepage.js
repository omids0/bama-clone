import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide'

function Homepage() {
      const [firstSlide, setfirstSlide] = useState(true);
      const [secondeSlide, setSecondeSlide] = useState(false);
      const [thirdSlide, setThirdSlide] = useState(false);
      const [timer, settimer] = useState(0);

      function slideChange() {
            let counter = timer
            setInterval(() => {
                  counter++
                  return settimer(counter)
            }, 1000);
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
                              <a href="#tab1" className='tab'>میانبر</a>
                        </div>
                        <div className='homepage-tab-section'>
                              <a href="#tab2" className='tab'>برند</a>
                        </div>
                        <div className='homepage-tab-section'>
                              <a href="#tab3" className='tab'>شاسی</a>
                        </div>
                        <div>
                              <a href="#tab4" className='tab'>قیمت</a>
                        </div>
                  </div>
                  <div className="homepage-details">
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
                  </div>
            </div>
      </div>;
}

export default Homepage;
