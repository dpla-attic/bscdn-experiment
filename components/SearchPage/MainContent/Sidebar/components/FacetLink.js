import { addCommasToNumber } from "lib"
import Link from "next/link"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  facet: {
    marginBottom: '0.5rem',
    display: 'flex',
    '&:hover .facetName': {
      textDecoration: 'underline'
    }
  },
  facetName: {
    color: 'black',
    flexBasis: '80%',
    fontSize: '.85em'
  },
  active: {
    fontWeight: 'bold'
  },
  count: {
    flexBasis: '20%',
    fontSize: '.85em',
    marginLeft: '0.25rem',
    textAlign: 'right',
    color: '#cac7c7'
  }
}))

const FacetLink = ({ route, queryKey, termObject, disabled }) => {
  const classes = useStyles()

  return (
    disabled
      ? <a className={classes.facet}>
          <p className={`${classes.facetName} ${classes.active}`}>
            {`${termObject.term} `}
          </p>
          <p className={classes.count}>
            {addCommasToNumber(termObject.count)}
          </p>
        </a>
      : <Link
        href={{
          pathname: route.pathname,
          query: Object.assign({}, route.query, {
            // some facet names have spaces, and we need to wrap them in " "
            [queryKey]: route.query[queryKey]
              ? [`${route.query[queryKey]}`, `"${[termObject.term]}"`].join("|")
              : `"${termObject.term}"`,
            page: 1
          })
        }}
      >
        <a className={classes.facet}>
          <p className={classes.facetName}>
            {`${termObject.term} `}
          </p>
          <p className={classes.count}>
            {addCommasToNumber(termObject.count)}
          </p>
        </a>
      </Link>
  )
}

export default FacetLink