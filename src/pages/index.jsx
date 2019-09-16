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

        <div>
          <h2 className={styles.heading}>Registry</h2>
          <div className={styles.registryList}>
            <span className={styles.registryItem}>
              <a href="http://tgt.gifts/SpauldingsSealTheDeal" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/432px-Target_logo.svg.png" alt="Target" />
              </a>
            </span>

            <span className={styles.registryItem}>
              <a href="https://www.amazon.com/wedding/share/SpauldingsSealTheDeal" target="_blank">
                <img src="http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png" alt="Target" />
              </a>
            </span>
          </div>
        </div>
      </div>
    )}
  </Layout>
);
