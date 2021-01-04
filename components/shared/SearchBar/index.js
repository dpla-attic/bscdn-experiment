import { withRouter } from "next/router"
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  input: {
    padding: '1em',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
}));

const SearchBar = ({ searchQuery, router }) => {
  const classes = useStyles();

  return (
    <form action="/search" data-cy="searchbar" className={classes.center}>
      <Input
        autoFocus={true}
        key={searchQuery}
        className={classes.input}
        defaultValue={router && router.query && router.query.q ? router.query.q : ""}
        placeholder="Search the Big Sky Digital Network"
        aria-label="Search the Big Sky Digital Network"
        autoComplete="off"
        name="q"
        type="search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          <Button variant="contained" color="primary" disableElevation type="submit">
            SEARCH
          </Button>}
      />
    </form>
  );
}

export default withRouter(SearchBar);