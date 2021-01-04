import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  error: {
    marginBottom: '10em',
    marginTop: '2em'
  }
}))

const MaxPageError = ({ maxPage, requestedPage }) => {
  const classes = useStyles()

  return (
    <div className={`container ${classes.maxPageError}`}>
      Sorry, DPLA does not serve more than {maxPage} pages of results for any
    query. (You asked for results starting from {requestedPage})
    </div>
  )
}

export default MaxPageError;
