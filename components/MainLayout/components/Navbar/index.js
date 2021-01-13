import React, { useState } from 'react'
import Link from 'next/link'
import SearchBar from "components/shared/SearchBar"
import SearchIcon from '@material-ui/icons/Search'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    padding: '.5rem 1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down(810)]: {
      display: 'none'
    },
    '& div': {
      display: 'inline-flex'
    },
    '& a': {
      textDecoration: 'none',
      color: '#282830',
      fontFamily: '$inter',
      fontSize: '16px',
      fontWight: '500',
      letterSpacing: '0.2px',
      marginRight: '1.75rem',
      lineHeight: '35px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      '& img': {
        height: '50px'
      }
    }
  },
  searchbar: {
    [theme.breakpoints.down(810)]: {
      display: 'none'
    }
  },
  divider: {
    height: '35px',
    width: '1px',
    backgroundColor: '#D8D8D8',
    marginRight: '1.75rem',
  }
}))

export default function Navbar() {
  const router = useRouter()
  const [show, setShow] = useState(router.pathname === '/search' ? true : false)
  const toggle = () => setShow(!show)
  const classes = useStyles()

  return (
    <>
      <nav className={classes.navbar} data-cy="navbar">
        <div data-cy="nav__logo">
          <Link href="/">
            <a>
              <img src={'/static/logo/dpla-logo-black.svg'} alt="DPLA" />
            </a>
          </Link>
        </div>

        <div data-cy="nav__links">
          <a href="https://dp.la" target="_blank">Visit DPLA</a>
          <div className={classes.divider} />

          <button onClick={toggle} data-cy="searchbar__icon">
            <SearchIcon />
          </button>
        </div>
      </nav>

      <div className={classes.searchbar}>
        {show && <SearchBar />}
      </div>
    </>
  )
}