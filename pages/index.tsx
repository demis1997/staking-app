import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
// this function returns what we want to show in the main page which is the title, logo and button with details
  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>The Ramen Shop Staking Contract</h1>
      <img src={`/icons/logoramen.png`} alt="logo of ramen" width="150" height ="150" />

        <div 
          className={styles.optionSelectBox}
        style={{paddingTop: '10px' }}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            You can now <b>stake you ramen NFTs</b>{" "}
            to earn great rewards such as <b>Web3 Tools, Free Mints, Whitelist Spots and more!</b>
          </p>
        </div>
      </div>

  );
};

export default Home;
