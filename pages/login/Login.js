import styles from "./Login.module.css";
import Layout from "../../layout/Layout";
import vercel from "../../public/vercel.svg";
import Image from "next/image";

function login() {
  return (
    <Layout title="PDA Login">
      <div className={styles.container}>
        <div className={styles.containergreen}></div>
        <div className={styles.centerbox}>
          <div className={styles.containergreen1}>Plasma Donor Application</div>
          <div className={styles.loginbox}>
            <form>
              <div class={styles.avatar}>
                {/* <img class={styles.avatar__image} src={vercel} /> */}
                <Image className={styles.avatar__image} src={vercel}></Image>
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <button type="sumbit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default login;
