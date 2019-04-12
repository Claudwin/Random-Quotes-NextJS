import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>Next Quotes</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/minty/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
