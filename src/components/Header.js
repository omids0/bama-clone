import React from 'react';

function Header() {
  return <div className="header">
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
            <a href="#">ثبت آگهی رایگان</a>
      </div>
      <div className="header-logo">
            <img src='./images/download.png'></img>
      </div>
  </div>;
}

export default Header;
