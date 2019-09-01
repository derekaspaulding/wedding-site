import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/welcome.module.less";
import "../styles/shared.css";
import welcomePhoto from "../images/welcomePhoto.jpg";
import { Map } from "./location";
import { isDev } from "../utils/devCheck";

export default () => (
  <Layout>
    <img src={welcomePhoto} className={styles.welcomePhoto} alt="" />
    {!isDev && (
      <div className={styles.info}>
        <h2 className={styles.heading}>When?</h2>
        <div className={styles.schedule}>
          Friday, November 8th, 2019
          <br />
          Ceremony at 3:30 PM
          <br />
          Reception to follow
        </div>
        <h2 className={styles.heading}>Where?</h2>
        <Map />
      </div>
    )}
  </Layout>
);
