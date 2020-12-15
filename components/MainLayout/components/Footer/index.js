import React from "react"
import scss from "../Footer/Footer.module.scss"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={scss.footer}>

      <div className={scss.footer__container}>
        <section className={scss.footer__section_top}>
          <div data-cy="footer__logo">
            <Link href="/">
              <a>
                <img src="/static/logo/dpla_bws-logo-white-footer.svg" alt="Black Women's Suffrage Logo"/>
              </a>
            </Link>
          </div>          

          <nav className={scss.footer__links} data-cy="footer__links">
            <Link href="/about">
              <a>About</a>
            </Link>

            <Link href="/timeline">
              <a>Timeline</a>
            </Link>

            <Link href="/key-figures">
              <a>Key Figures</a>
            </Link>

            <Link href="/collections">
              <a>Collections</a>
            </Link>

            <Link href="/partners">
              <a>Partners</a>
            </Link>
          </nav>

          <a href="http://dp.la/" rel="noopener" target="_blank" data-cy="footer__logo_dpla"> 
            <img src="/static/logo/dpla-logo-footer.svg" alt="Digital Public Library of America Logo"/>
          </a>
        </section>

        <section className={scss.footer__divider}></section>
        <div className={scss.footer__links_small_container}>
          <nav className={scss.footer__links_small} data-cy="footer__links_small">
            <a href="http://dp.la/" rel="noopener" target="_blank"> Visit DPLA</a>
          </nav>

          <section className={scss.footer__section_bottom}>
            <p className={scss.footer__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus aliquam velit, sit amet lacinia mauris pretium quis. Donec enim arcu, vehicula sed rutrum vitae, elementum quis justo. Duis lacinia nec sem eget tincidunt. Integer finibus consectetur odio vel bibendum. Aenean ultricies urna sed venenatis laoreet. Nullam malesuada rhoncus nisi eu mattis. Pellentesque vitae tempor mauris, sit amet malesuada diam. Sed vel augue consequat, feugiat lorem vel, blandit nisi. Sed velit mauris, convallis at ligula non, convallis pulvinar nisl.</p>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer