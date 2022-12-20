import React from 'react'
import PagesView from './PagesView'


const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <div>
        <div width="50" height="50" className="inline-block fill-current">
          <PagesView />
        </div>
        <p className="font-bold">
          ACME Industries Ltd. <br />Providing reliable tech since 1992
        </p>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a className='' href='https://www.linkedin.com/in/paul-ruiz-fwd/?locale=en_US' target='blank'><i className=" fa-brands fa-linkedin"></i></a>
          <a href='https://github.com/paul3183' target='blank'><i className="fa-brands fa-github"></i></a>
          <a href='https://www.facebook.com/profile.php?id=100045637998381&mibextid=ZbWKwL' target='blank'><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer