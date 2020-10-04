import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import absoluteUrl from "next-absolute-url";
import Link from "next/link";

function Home({ url, e, data }) {
  const doPost = () => axios.post("/api/foo").then((r) => console.log(r.data));
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>index page</h3>
      <Link href="/page2">
        <a>go to page 2</a>
      </Link>{" "}
      <Link href="/page3">
        <a>go to page 3</a>
      </Link>
      <button onClick={doPost}>do post</button>
      <pre>{JSON.stringify({ url, e, data }, null, 2)}</pre>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  let url;
  try {
    const { protocol, host } = absoluteUrl(ctx.req);
    url = `${protocol}//${host}/api/hello`;
    const { data } = await axios.get(url);
    return { data };
  } catch (e) {
    return { url, e };
  }
};

export default Home;
