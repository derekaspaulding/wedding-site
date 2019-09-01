import React from "react";
import Layout from "../components/Layout";
import "../styles/shared.css";
import styles from "../styles/location.module.less";

export const Map = () => {
  const [isLoading, setLoading] = React.useState(true);
  return (
    <div className={styles.mapContainer}>
      {isLoading && <span>Loading Map...</span>}
      <iframe
        className={styles.map}
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCxZPiY82kfjNvyUkvhmSLkG6Z1azfn4ug
        &q=Lowertown+Event+Center,St+Paul,MN"
        onLoad={() => setLoading(false)}
        allowFullScreen
      />
    </div>
  );
};

export default () => (
  <Layout>
    <Map />
  </Layout>
);
