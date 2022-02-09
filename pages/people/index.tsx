import { person } from "../../interface";
import PersonItem from "../../components/People/PersonItem";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/people/people.module.css";
import Navbar from "../../components/Navbar/Navbar";
import NavbarItem from "../../components/Navbar/NavbarItem";

const people = (props: { peoples: person[] }) => {
  return (
    <div>
      <Head>
        <title>Everyone</title>
      </Head>
      <Navbar>
        <div>
          <NavbarItem name="Home" href="/" />
        </div>
      </Navbar>
      <div className={styles.mainContainer}>
        {props.peoples.map((el: person) => (
          <PersonItem person={el} key={el.id} />
        ))}
      </div>
      <div>
        <Link href={"/"}>Home</Link>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const peoples: person[] = await data.json();
  return {
    props: { peoples },
  };
};

export default people;
