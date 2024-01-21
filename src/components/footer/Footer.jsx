import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Shubham Verma</div>
      <div className={styles.text}>
        Shubham Verma © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;