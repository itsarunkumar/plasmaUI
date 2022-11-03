import styles from "./Register.module.css";
import Layout from "../../layout/Layout";
import vercel from "../../public/vercel.svg";
import Image from "next/image";
import {useState, useEffect} from "react";

function login() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formdata, setFormData] = useState({name: '', email: '', password: ''})

    const handleForm = (e)=>{
        e.preventDefault()
        e.target.value = formdata.name

    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

    }, [])

    return (
        <Layout title="PDA Register">
            <div className={styles.container}>
                <div className={styles.containergreen}></div>
                <div className={styles.centerbox}>
                    <div className={styles.containergreen1}>Plasma Donor Application</div>
                    <div className={styles.loginbox}>
                        <form>
                            <h1>
                                <div class={styles.avatar}>
                                    <Image className={styles.avatar__image} src={vercel}></Image>
                                </div>
                            </h1>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    value=''
                                    type="name"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    value=''
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input
                                    value=''
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
