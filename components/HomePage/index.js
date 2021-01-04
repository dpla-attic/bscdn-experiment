import SearchBar from "../shared/SearchBar";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down(810)]: {
      display: 'none'
    },
  }
}));

const HomePage = () => {  
  const classes = useStyles()

  return (      
    <div className={classes.root}>
      <SearchBar/>
    </div>
  )
};

export default HomePage;