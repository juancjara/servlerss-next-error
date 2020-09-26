import styles from "../styles/Home.module.css";
import axios from "axios";
import absoluteUrl from "next-absolute-url";
import Link from "next/link";

function Page2({ url, e, data }) {
  return (
    <div className={styles.container}>
      <h3>page 2</h3>
      <Link href="/">
        <a>go to index</a>
      </Link>
      <Link href="/page3">
        <a>go to page 3</a>
      </Link>
      <pre>{JSON.stringify({ url, e, data }, null, 2)}</pre>
    </div>
  );
}

Page2.getInitialProps = async (ctx) => {
  let url;
  try {
    const { protocol, host } = absoluteUrl(ctx.req);
    url = `${protocol}//${host}/api/foo`;
    const { data } = await axios.get(url);
    return { data };
  } catch (e) {
    return { url, e };
  }
};

export default Page2;
