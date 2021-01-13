import { withRouter } from "next/router"

import MainMetadata from "./MainMetadata"
import OtherMetadata from "./OtherMetadata"
import JsonLdMarkup from "./JsonLdMarkup"

import { getFullPath, joinIfArray, googleAnalytics } from "lib"

import { initGA } from "../../../lib/googleAnalytics"
import { useEffect } from 'react'

const Content = ({item, url}) => {
  useEffect(() => {
    // items track the clickthroughs and the view for the partner
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    trackItemView();
  })

  const trackItemView = () => {
    const fullPath = getFullPath();
    const itemId = item.id;
    const title = joinIfArray(item.title, ", ");
    const contributor = joinIfArray(item.contributor, ", ");
    const partner = joinIfArray(item.partner, ", ");

    // if (fullPath !== this.lastTrackedPath) {
      const gaEvent = {
        type: "View Item",
        itemId: itemId,
        title: title,
        partner: partner,
        contributor: contributor
      };

    //   this.lastTrackedPath = fullPath;
      googleAnalytics.logEvent(gaEvent);
    // }
  }

  return (
    <>
        <MainMetadata item={item} />
        <OtherMetadata item={item} />
        <JsonLdMarkup item={item} url={url} />
    </>
  )
}

export default withRouter(Content);
