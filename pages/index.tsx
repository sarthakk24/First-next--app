import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/home/Home.module.css";
import buttonStyles from "../styles/UI/buttons.module.css";
import NavbarItem from "../components/Navbar/NavbarItem";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Navbar>
        <div>
          <NavbarItem href="/people" name="People" />
        </div>
        <div>
          <NavbarItem href="/people/1" name="Example" />
        </div>
      </Navbar>
      <div className={styles.humanContainer}>
        <div>This website provides dataBase for random humans</div>
        <div className={styles.btn}>
          <Link href="/people">
            <a className={buttonStyles.button}>People</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
