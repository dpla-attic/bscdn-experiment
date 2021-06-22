import { getDefaultThumbnail } from "lib";

const THUMB_SERVER = "https://bscdn-images.dp.la/thumbnails";

const getItemThumbnail = (item) => {
    const url = `${THUMB_SERVER}/${item.id}.jpg`;
    console.log(url);
    return url;
};

export default getItemThumbnail;