import ListView from "components/shared/ListView";
import Sidebar from "./Sidebar";
import Pagination from '@material-ui/lab/Pagination';
import { useRouter } from 'next/router'
import { addLinkInfoToResults } from "lib";
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      paddingRight: 0,
      paddingLeft: 0,
      marginTop: '2rem',
      flexDirection: 'row'
    },
  },
  sidebar: {
    flexBasis: '33%',
    overflow: 'hidden',
    visibility: 'hidden',
    maxHeight: 0,
    transition: 'max-height 0.15s ease-in-out, visibility 0s 0.15s',
    '& .isOpen': {
      display: 'inline',
      maxHeight: '200rem'
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: '1rem',
      maxHeight: 'none',
      visibility: 'visible',
      overflow: 'visible'
    }
  },
}));

const MainContent = ({
  results,
  route,
  facets,
  paginationInfo,
  hideSidebar,
}) => {
  const router = useRouter()
  const classes = useStyles();

  const updatePage = (val) => {
    router.push({
      pathname: router.pathname,
      query: {...router.query, page: val}
    })
  }

  return (
    <div className={classes.main}>
      {results.length > 0 &&
        <div className={`${!hideSidebar ? classes.isOpen : ""} ${classes.sidebar}`}>
          <Sidebar route={route} facets={facets} />
        </div>}
      <div id="main" role="main">
        {results.length > 0 &&
          <ListView
            route={route}
            items={addLinkInfoToResults(results, route.query)}
            viewMode={route.query.list_view}
          />}
        {results.length === 0 &&
          <>
            <h3 className={classes.root}>Your search did not match any items.</h3>
            <h4 className={classes.root}>Some suggestions:</h4>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="make sure spelling is correct" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="try different keywords" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="try more general keywords" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="try removing filters" />
              </ListItem>
            </List>
          </>}

        <Pagination
          count={Math.ceil(paginationInfo.pageCount / paginationInfo.pageSize)}
          page={parseInt(paginationInfo.currentPage, 10)}
          onChange={(event, val) => updatePage(val)}
        />
      </div>
    </div>
  )
}

export default MainContent;
