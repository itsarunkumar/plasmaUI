import {Navbar} from "../components";
import styles from "./Layout.module.css";
import Head from "next/head";

const Layout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title??"Plasma Donor App"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <div>
                <Navbar/>
                {children}
            </div>
        </>
    );
};

export default Layout;
