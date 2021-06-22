import MainLayout from "components/MainLayout"
import BSCDNHead from "components/BSCDNHead";
import fetch from "isomorphic-fetch";
import Link from "next/link";
import {SITE_TAG} from "../constants/site";

const Titles = ({items: items}) => {
    return (
        <MainLayout className="main" role="main">
            <BSCDNHead
                pageTitle="Experiment | DPLA"
                pageDescription=""
                pageImage="/static/graphic/image/home-hero-bg.png"
                pageImageCaption="Images from the Experiment"
            />
            <div style={{paddingTop: '25px'}}>
            <div className="content">
            <h1>Record Titles</h1>
            <ul>
                {items.map( (record) => {
                    return (
                        <li key={record.id}>
                            <Link href={`/item/${record.id}`}>
                                <a>
                                    {record.sourceResource.title}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul></div></div>
        </MainLayout>
    )
};

export const getStaticProps = async ({params}) => {
    const tag = SITE_TAG;
    let items = [];
    const endpoint = process.env.API_URL || 'https://api.dp.la'
    for (let i = 1; i < 11; i++) {
        const url = `${endpoint}/v2/items?page=${i}&page_size=500&filter=${tag}&api_key=${process.env.API_KEY}`;
        const res = await fetch(url);
        const json = await res.json();
        items = items.concat(json['docs']);
    }

    return { props: {items: items }};
};

export default Titles;
