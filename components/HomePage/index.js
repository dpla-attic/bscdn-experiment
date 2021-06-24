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
        backgroundImage: 'url("https://bscdn-images.dp.la/1cbea2f91fbe1df4e8b1686a77f725a8.jpg")',
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

        <h1>Backpacking Yellowstone’s Thorofare Region</h1>

        <h2>Introduction</h2>

        <p>
          This photograph collection documents a nearly 90-mile trip taken on foot over nine days in the southeast corner of Yellowstone National Park in September 2019. The trip began at the Heart Lake trailhead near Lewis Lake and proceeded east past Heart Lake and the south and southeast arms of Yellowstone Lake before intersecting the Thorofare Trail. The route then turned south and reached the Thorofare Ranger Station in the extreme southeast corner of the park. This place is considered the most remote spot in the lower 48 states; it is at least 30 miles to a road in any direction.
        </p>

        <p>
          From the Thorofare Ranger Station the route turned west along the South Boundary Trail of the park. The hikers did a side trip to the Hawk’s Rest Patrol Cabin, which lies a few miles outside the south boundary of the park, in the Teton Wilderness.
        </p>

        <p>
          Returning to the South Boundary Trail, the route gained elevation to Mariposa Lake at 9,400 feet, then dropped 1,000 feet before ascending Big Game Ridge, whose top elevation was approximately 10,000 feet. The trail then followed the Snake River before ending at the park’s south entrance.
        </p>
          <p>
              Hikers from Bozeman, Montana were Kenning Arlitsch, Bob Hietala, and Douglas Wollant, and Robert Patrick from Cleveland, Ohio.
          </p>

        <h2>References Used to Plan and Document the Trip</h2>

        <ul style={{marginLeft: "55px", textIndent: "-55px" }}>
            <li>Ferguson, G. (2003). <i>Hawks rest: A season in the remote heart of Yellowstone.</i> National Geographic Adventure Press.</li>
            <li>Murray, C. (2016). <i>Walks in Wild Yellowstone: A summer of solo backpacking in Yellowstone National Park.</i></li>
            <li><i>Old Faithful, Yellowstone National Park SW, Wyoming, Montana, Idaho, USA: Trails Illustrated map ... outdoor recreation map</i> (Revised 2012). (2012). [Map]. National Geographic Maps.</li>
            <li>Schneider, B. (2012). <i>Hiking Yellowstone National Park: A guide to more than 100 great hikes</i> (3rd ed). FalconGuides.</li>
            <li><i>Yellowstone Lake, Yellowstone National Park SE, Wyoming, USA: Trails Illustrated map ... outdoor recreation map (Rev. 2008).</i> (2008). [Map]. Trails Illustrated.</li>
            <li>Yochim, M. J. (2016). <i>A week in Yellowstone’s Thorofare: A journey through the remotest place.</i> Oregon State University Press.</li>
        </ul>
      </div></div>
    </>
  )
};

export default HomePage;