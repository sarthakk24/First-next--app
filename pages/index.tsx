import type { NextPage } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/home/Home.module.css";
import humans from "../components/lottie/background.jpg";
import Image from "next/image";

const Home: NextPage = () => {
  // <div className={styles.contentContainer}>
  //   <p>Get detailed data on 10 random humans on planet earth.</p>
  //   <Link href="/people">
  //     <button>People</button>
  //   </Link>
  // </div>
  // <div className={`${styles.imageContainer}`}>
  //   {/* <img
  //     src="../components/lottie/background.jpg"
  //     alt="Humans"
  //     className={`${styles.humanImg}`}
  //   /> */}
  //   <Image src={humans} alt="Humans" className={`${styles.humanImg}`} />
  // </div>
  return (
    <div className={styles.home}>
      <Navbar />
      <div>
        <div className={`${styles.imageContainer}`}>
          <Image src={humans} alt="human" />
        </div>
      </div>
    </div>
  );
};

export default Home;
