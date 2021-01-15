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
  const classes = useStyles();
  const p = {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#282830',
    fontFamily: '$inter',
    fontSize: '16px',
    fontWight: '500',
  };

  const ul = {
    listStyleType: 'disc',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 'auto',
  }

  const div = {
    paddingTop: '5rem',
    paddingBottom: '4rem',
    paddingLeft: '1em',
    paddingRight: '1em'
  }

  return (
    <>
      <div className={classes.root}>
        <SearchBar className={classes.root}/>
      </div>

      <div style={div}>
        <p style={p}>
          This site is part of a search engine optimization experiment being conducted by partners Digital Public
          Library of America and Big Sky Country Digital Network.
          </p>
        <p style={p}>
          For an experience built for human consumption, we recommend trying our official sites:
          </p>
        <ul style={ul}>
          <li><a href={"https://bscdn.dp.la"}>Big Sky Digital Network</a></li>
          <li><a href={"https://dp.la"}>Digital Public Library of America</a></li>
        </ul>

      </div>
    </>
  )
};

export default HomePage;