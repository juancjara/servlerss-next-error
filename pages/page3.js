import styles from "../styles/Home.module.css";
import axios from "axios";
import absoluteUrl from "next-absolute-url";
import Link from "next/link";

function Page3({ url, e, data }) {
  return (
    <div className={styles.container}>
      <h3>page 3 - noabsoluteUrl module</h3>
      <Link href="/">
        <a>go to index</a>
      </Link>
      <Link href="/page2">
        <a>go to page 2</a>
      </Link>
      <pre>{JSON.stringify({ url, e, data }, null, 2)}</pre>
    </div>
  );
}

Page3.getInitialProps = async () => {
  let url = "/api/foo";
  try {
    const { data } = await axios.get(url);
    return { data };
  } catch (e) {
    return { url, e };
  }
};

export default Page3;
