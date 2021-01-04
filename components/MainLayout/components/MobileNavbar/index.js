import Link from 'next/link'
import { Drawer, Button, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up(810)]: {
      display: 'none'
    },
  },
  list: {
    width: 250,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em 0'
  },
  image: {
    height: '50px'
  }
}));

export default function MobileNavbar() {
  const classes = useStyles();
  const [menuDisplayed, setMenuDisplayed] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMenuDisplayed(open);
  };

  const navItems = [
    { text: 'Home', href: "/" },
    { text: 'Search', href: "/search" },
    { text: 'Visit DPLA', href: "https://dp.la/" },
  ]

  return (
    <nav className={classes.root}>
      <div className={classes.container}>
        <Link href="/">
          <a>              
            <img src={'/static/logo/logo.png'} alt="Big Sky Digital Network" className={classes.image}/>
          </a>
        </Link>

        <Button onClick={toggleDrawer(true)}>
          {menuDisplayed ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </div>

      <Drawer anchor='right' open={menuDisplayed} onClose={toggleDrawer(false)}>
        <List className={classes.list}>
          {navItems.map((item, index) => (
            <ListItem button component="a" href={item.href} key={`mobile-nav-item-${index}`}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </nav>
  );
}