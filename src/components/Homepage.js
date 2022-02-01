import React from 'react';

function Homepage() {
      return <div className="homepage">
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
            </div>
      </div>;
}

export default Homepage;
