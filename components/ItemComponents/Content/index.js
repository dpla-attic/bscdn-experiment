import { withRouter } from "next/router";

import MainMetadata from "./MainMetadata";
import OtherMetadata from "./OtherMetadata";
import JsonLdMarkup from "./JsonLdMarkup";

import { getFullPath, joinIfArray, googleAnalytics } from "lib";

import { initGA } from "../../../lib/googleAnalytics";

class Content extends React.Component {
  // items track the clickthroughs and the view for the partner
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    this.trackItemView();
  }

  trackItemView() {
    const fullPath = getFullPath();
    const itemId = this.props.router.query.itemId;
    const title = joinIfArray(this.props.item.title, ", ");
    const contributor = joinIfArray(this.props.item.contributor, ", ");
    const partner = joinIfArray(this.props.item.partner, ", ");

    if (fullPath !== this.lastTrackedPath) {
      const gaEvent = {
        type: "View Item",
        itemId: itemId,
        title: title,
        partner: partner,
        contributor: contributor
      };

      this.lastTrackedPath = fullPath;
      googleAnalytics.logEvent(gaEvent);
    }
  }

  render() {
    const { item, url } = this.props;
    return (
      <>
        <MainMetadata item={item} />
        <OtherMetadata item={item} />
        <JsonLdMarkup item={item} url={url} />
      </>
    );
  }
}

export default withRouter(Content);
