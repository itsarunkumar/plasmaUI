import Link from "next/link";
import Layout from "../layout/Layout";
import styles from './Index.module.css'

export default function Home() {
    return <Layout>
    <div className={styles.container}>
        <h1>
            Plasma Donor Application
        </h1>
    </div>
    </Layout>;
}
