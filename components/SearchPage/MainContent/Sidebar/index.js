import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DateFacet from "./components/DateFacet"
import FacetLink from "./components/FacetLink"

import {
  possibleFacets,
  mapFacetsToURLPrettified,
  prettifiedFacetMap
} from "constants/search";

import { escapeForRegex } from "lib";

import css from "./Sidebar.module.scss";
import zIndex from "@material-ui/core/styles/zIndex";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

class Sidebar extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      possibleFacets.some(
        facet => nextProps.facets[facet] !== this.props.facets[facet]
      ) ||
      nextProps.query !== this.props.query
    ) {
      this.forceUpdate();
    }
  }

  render() {
    // const classes = useStyles();
    const { route, facets } = this.props;
    const isFacetValueInQuery = (facetKey, value) =>
      route.query[mapFacetsToURLPrettified[facetKey]] &&
      // handles case of sources with both
      // "moving image" and "image" as types
      new RegExp('"' + escapeForRegex(value) + '"').test(
        route.query[mapFacetsToURLPrettified[facetKey]]
      );
    let hasDates = false;

    return (
      <div className={css.sidebar}>
        <Typography variant="h2" gutterBottom>
          Refine Your Search
        </Typography>
        <div>
          {Object.keys(facets).map((key, index) => {
            if (key.indexOf("sourceResource.date") === -1 && key.indexOf("tags") === -1) {
              return (
                <Accordion key={`sidebar-accordion-${index}`}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{prettifiedFacetMap[key]}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {facets[key].terms.map((termObject, index) => {
                        if (possibleFacets.includes(key)) {
                          return (
                            <FacetLink
                              key={index}
                              route={route}
                              termObject={termObject}
                              queryKey={mapFacetsToURLPrettified[key]}
                              disabled={isFacetValueInQuery(key, termObject.term)}
                            />
                          )
                        }
                      })}
                    </Typography>
                  </AccordionDetails>
                </Accordion>                
              )
            } else {
              if (!hasDates) {
                hasDates = true; // because there's facets for after and before we dont want two date ranges
                let dateProps = {};
                if (route.query.after) dateProps.after = route.query.after;
                if (route.query.before) dateProps.before = route.query.before;
                return (
                  <Accordion key={`data-accordion-${index}`}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{prettifiedFacetMap[key]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <DateFacet route={route} {...dateProps} />
                    </AccordionDetails>
                  </Accordion>
                )
              }
            }
          })}
        </div>
      </div>
    );
  }
}

export default Sidebar;
