import React, { Component } from 'react'
import Link from 'next/link'
import scss from "./Navbar.module.scss"
import SearchBar from "components/shared/SearchBar";
import ActiveLink from './ActiveLink'
import SearchIcon from '@material-ui/icons/Search';

class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      showSearchbar: false
    }

  }

  componentDidMount = () => {
    let path = window.location.pathname
    if (path === '/search') {
      this.setState({
        showSearchbar: true
      })
    }
  }

  triggerSearchbar = () => {
    this.setState({
      showSearchbar: !this.state.showSearchbar
    })
  }


  render() {
    return (
      <>
        <nav className={scss.navbar} data-cy="navbar">
          <div className={scss.nav__logo} data-cy="nav__logo">
            <Link href="/">
              <a>
                
                <img src={'static/logo/logo.png'} alt="Big Sky Digital Network"/>
              </a>
            </Link>
          </div>

          <div className={scss.nav__links} data-cy="nav__links">

            {/* <ActiveLink activeClassName={scss.active} href="/about">
              <a>About</a>
            </ActiveLink> */}

            <a href="https://dp.la" target="_blank">Visit DPLA</a>
            <div className={scss.divider} />

            <button onClick={this.triggerSearchbar} data-cy="searchbar__icon">
              <SearchIcon />
            </button>

          </div>
        </nav>

        {this.state.showSearchbar &&
          <SearchBar />
        }
      </>
    )
  }
}

export default Navbar
