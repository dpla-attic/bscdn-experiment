import SearchBar from "../shared/SearchBar";
import { makeStyles } from '@material-ui/core/styles';
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down(810)]: {
      display: 'none'
    },
  }
}));

const HomePage = ({ siteName }) => {
  const classes = useStyles();

  return (
    <>
      <Link href={'/search'}><a><div style={{
        backgroundImage: 'url("https://bscdn-images.dp.la/072c5702a83b7fc48a0b7899c231d5d3.jpg")',
          width: '800px',
          height: '523px',
        padding: '8px',
        opacity: 0.8
      }}/></a></Link>
      <div className={classes.root}>
        <SearchBar className={classes.root}/>
      </div>

      <div style={{paddingTop: '25px'}}>
      <div className={"content"}>

        <h1>Experiment</h1>

        <p>
          This site is part of a search engine optimization experiment being conducted by partners Digital Public
          Library of America and Big Sky Country Digital Network.
        </p>

        <p>
          For an experience built for human consumption, we recommend trying our official sites:
        </p>

        <ul>
          <li><a href={"https://bscdn.dp.la"}>Big Sky Digital Network</a></li>
          <li><a href={"https://dp.la"}>Digital Public Library of America</a></li>
        </ul>

        <h2>Have a look at the listing of <Link href={'/titles'}><a>item titles</a></Link>.</h2>

        <h2>About the Thomas Brown Brook Photographs Collection</h2>

        <p><strong>Thomas Brown Brook (1890-1966)</strong> was the son of John Brook, a gold miner who came to Montana in 1863. In 1870, John Brook established a ranch on the Beaverhead River eight miles south of Twin Bridges Montana and Thomas Brook grew up on the ranch and attended local schools. Thomas Brook graduated from the Gallatin County High School in Bozeman, and in 1913 earned a degree in Civil Engineering from Montana State College. After serving in France during World War I, Brook returned to Twin Bridges and worked as an electrician.</p>

        <p>Brook began taking photographs of various locations in and around Twin Bridges as a hobby. Eventually, he engaged in copying historical photographs brought to him by local area individuals. Before his death in 1966, Brook had compiled a substantial collection of both original and copied photographs.</p>

        <p>The Montana State University Library Thomas Brook Photograph Collection includes photos of: nature landscapes and town views of southwest Montana, Twin Bridges, Madison and Beaverhead counties, and cover topics on natural history, ranch and farming operations, bridges and bridge construction, mining and timber outfits, early settlers and historical visitors.</p>

        <p><a rel={"nofollow"} href={"https://arc.lib.montana.edu/finding-aids/item.php?id=84"}>The MSU Library Thomas B. Brook Special Collections Finding Aid</a> has complete details on the photographs, content, and provenance related to this digital archives collection.</p>

        <h2>About the Montana State University (MSU) Historical Photographs Collection</h2>

        <p>The <a rel={"nofollow"} href={"https://www.lib.montana.edu/archives/"}>Montana State University Archives</a> holds over 34,000 volumes and 1,200 linear feet of archive manuscript materials. In addition to the manuscript materials, there are also archived: microforms, sound recordings, film and video recordings, unique maps and historical photographs. Over 4,000 of these historical photographs are of Montana State University from 1893 through the 1960s. These unique MSU historical photos include: early 20th century campus student activities and clubs, campus grounds and buildings, historical events, and prominent alumnus, faculty and administrators.</p>

        <p>In 2012, the Montana State University Archives and the Montana State University Library Digital Initiatives launched the Montana State University (MSU) Historical Photographs Database Project. Phase 1 of the project included selecting historical photographs and scanning and tagging them for browser delivery through a searchable database.</p>

        <p>Phase 1 also included the development of the <a href={"https://arc.lib.montana.edu/msu-photos/app/"}>MSU Historic Photos Tour beta application</a>. The App is designed to deliver selected digital historic photos associated with a map of MSU campus buildings for delivery in hand-held devices to users walking around the campus.</p>

        <p>The <strong>MSU Historical Photographs Database Project</strong> is an on-going, long-term project focused on providing Montana State University historical photographs online and in easily accessible downloadable jpg format.</p>

      </div></div>
    </>
  )
};

export default HomePage;