import React, { useState, useEffect, useRef } from "react";
import styles from "./layout.module.less";
import "./background.less";
import { Link } from "gatsby";
import { isDev } from "../../utils/devCheck";

function useCollapsed() {
  const [isCollapsed, setCollapsed] = useState(true);
  const [isOverflowed, setOverflowed] = useState(false);

  useEffect(() => {
    const mq =
      window !== undefined ? window.matchMedia("(max-width: 518px)") : {};

    setOverflowed(mq.matches);

    const handler = event => {
      setOverflowed(event.matches);
    };

    mq.addListener(handler);

    return () => mq.removeListener(handler);
  }, []);

  const toggleCollapsed = () => setCollapsed(!isCollapsed);

  return { isCollapsed, toggleCollapsed, isOverflowed };
}

const Layout = ({ children }) => {
  const { isCollapsed, toggleCollapsed, isOverflowed } = useCollapsed();
  const navClasses = [styles.navContainer];
  if (isCollapsed) {
    navClasses.push(styles.navCollapsed);
  }
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h1 className={styles.names}>
          Shaina & Derek
          <br />
          11.08.19
        </h1>

        {isDev && (
          <nav className={navClasses.join(" ")}>
            <Link className={styles.navLink} to="/">
              Welcome
            </Link>
            <Link devOnly={true} className={styles.navLink} to="/story">
              Our Story
            </Link>
            <Link className={styles.navLink} to="/location">
              When & Where
            </Link>
            <Link devOnly={true} className={styles.navLink} to="/wedding-party">
              Wedding Party
            </Link>
            <Link devOnly={true} className={styles.navLink} to="/registry">
              Registry
            </Link>
            <Link devOnly={true} className={styles.navLink} to="/faq">
              FAQ
            </Link>
          </nav>
        )}
        {isOverflowed && (
          <button className={styles.overflowButton} onClick={toggleCollapsed}>
            {isCollapsed ? "More..." : "Less..."}
          </button>
        )}
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
