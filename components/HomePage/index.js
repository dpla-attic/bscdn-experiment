import SearchBar from "../shared/SearchBar";
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: 'url(/static/image/home-hero-bg.png)',
    height: '500px'
  }
}))

const HomePage = () => {
  const classes = useStyles();
  
  return (
    // <section className={classes.banner}>
      
      <SearchBar />
    // </section>
  )
};

export default HomePage;