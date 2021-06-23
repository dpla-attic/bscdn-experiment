import fetch from "isomorphic-fetch";
import BSCDNHead from "components/BSCDNHead";
import MainLayout from "components/MainLayout";
import Content from "components/ItemComponents/Content";
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';

import { API_ENDPOINT } from "constants/items";

import {
  getCurrentUrl,
  getCurrentFullUrl,
  joinIfArray,
  getItemThumbnail,
} from "lib";
import Error from "next/error";

const ItemDetail = ({ err, url, item }) => {

  console.log("ERR", err);

  if (err) return <Error statusCode={err}/>

  return (
    <MainLayout>
      <BSCDNHead
        pageTitle={`${item.title} | DPLA`}
        pageDescription={item.description}
        pageImage={item.image}
      />
      <Box p='1em'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/search">
            All items
        </Link>
          <Typography color="textPrimary">{joinIfArray(item.title)}</Typography>
        </Breadcrumbs>
      </Box>

      <main
        id="main"
        role="main"
        className="container"
      >
        <Content item={item} url={url} />
      </main>

    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const itemId = context.params.itemId;
  const req = context.req;
  const res = context.res;
  const currentFullUrl = getCurrentFullUrl(req);
  const currentUrl = getCurrentUrl(req);
  try {
    const res = await fetch(`${currentUrl}${API_ENDPOINT}/${itemId}`);

    const json = await res.json();

    if (json === "Not Found") {
      console.log("couldn't find it")
      res.statusCode = 404

      return {
        props: {
          err: 404,
          error: `Item not found`
        }
      }
    }

    const doc = json.docs[0];
    const image = process.env.FULL_FRAME_IMAGES ? `https://bscdn-images.dp.la/${doc.id}.jpg` : getItemThumbnail(doc)
    const date = doc.sourceResource.date &&
      Array.isArray(doc.sourceResource.date)
      ? doc.sourceResource.date[0]
      : doc.sourceResource.date;
    const language = doc.sourceResource.language &&
      (Array.isArray(doc.sourceResource.language)
        ? doc.sourceResource.language.map(lang => {
          return lang.name;
        })
        : doc.sourceResource.language) || "";
    const strippedDoc = Object.assign({}, doc, { originalRecord: "" });
    delete strippedDoc.originalRecord;
    return {
      props: {
        currentFullUrl,
        item: Object.assign({}, doc.sourceResource, {
          id: doc.id,
          image,
          contributor: doc.dataProvider,
          intermediateProvider: doc.intermediateProvider ? doc.intermediateProvider : "",
          date: date ? date : "",
          language: language ? language : "",
          partner: doc.provider.name,
          sourceUrl: doc.isShownAt,
          useDefaultImage: !doc.object,
          edmRights: doc.rights ? doc.rights : "",
          doc: strippedDoc,
          originalRecord: doc.originalRecord
        })
      }
    };
  } catch (error) {
    console.log(error);
    if (res) {
      res.statusCode = 404;
    }
    return { props: { error: { statusCode: 404 } } };
  }
};
export default ItemDetail;
