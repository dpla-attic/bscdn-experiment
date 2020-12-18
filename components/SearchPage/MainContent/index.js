import React from "react";

import ListView from "components/shared/ListView";
// import Pagination from "components/shared/Pagination";
import Sidebar from "./Sidebar";
import Pagination from '@material-ui/lab/Pagination';
import { useRouter } from 'next/router'

import { addLinkInfoToResults } from "lib";

import css from "./MainContent.module.scss";

// const updatePage = () => {
//   console.log(route.query)
// }

const MainContent = ({
  results,
  route,
  facets,
  paginationInfo,
  hideSidebar,
}) => {
  const router = useRouter()
  const { pid } = router.query

  return (
  <div className={css.wrapper}>
    <div className={`container ${css.mainContent}`}>
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
          <div className={``}>
            <p>
              Your search did not match any items.
            </p>
            <p>
              Some suggestions:
            </p>
            <ul>
              <li>make sure spelling is correct</li>
              <li>try different keywords</li>
              <li>try more general keywords</li>
              <li>try removing filters</li>
            </ul>
          </div>}

          <Pagination count={10} page={parseInt(paginationInfo.currentPage, 10)} 
          onChange={updatePage}/>

        {/* <Pagination
          route={route}
          itemsPerPage={paginationInfo.pageSize}
          currentPage={parseInt(paginationInfo.currentPage, 10)}
          totalItems={paginationInfo.pageCount}
          pageCount={Math.ceil(
            paginationInfo.pageCount / paginationInfo.pageSize
          )}
        /> */}
      </div>
    </div>
  </div>
  )
}

export default MainContent;
