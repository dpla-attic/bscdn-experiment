import ListView from "components/shared/ListView";
import Sidebar from "./Sidebar";
import Pagination from '@material-ui/lab/Pagination';
import { useRouter } from 'next/router'

import { addLinkInfoToResults } from "lib";
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import css from "./MainContent.module.scss";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
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
    <div className={css.mainContent}>
      {results.length > 0 &&
        <div className={`${!hideSidebar ? css.isOpen : ""} ${css.sidebar}`}>
          <Sidebar route={route} facets={facets} />
        </div>}
      <div id="main" role="main" className={css.resultsAndPagination}>
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
