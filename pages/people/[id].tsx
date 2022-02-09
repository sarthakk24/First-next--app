import Head from "next/head";
import Link from "next/link";
import Avatar from "react-avatar";
import PersonData from "../../components/People/PersonData";
import { person } from "../../interface";
import styles from "../../styles/people/peoplePersonal.module.css";
import buttonStyles from "../../styles/UI/buttons.module.css";

const Render = (props: { person: person }) => {
  const { id, name, username, email, address, phone, website, company } =
    props.person;

  const addressFinal: string = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode} `;

  return (
    <>
      <Head>
        <title>{props.person.name}</title>
      </Head>

      <div className={`${styles.mainContainer}`}>
        <div className={styles.container}>
          <div className={styles.introContainer}>
            <Avatar name={name} className={styles.avatar} />
            <div>
              <PersonData label="Username" value={username} />
              <PersonData label="Full Name" value={name} />
              <PersonData label="Email" value={email} />
            </div>
          </div>
          <div className={styles.companyContainer}>
            <Avatar name={company.name} className={styles.companyAvatar} />
            <div>
              <PersonData label="Company Name" value={company.name} />
              <PersonData label="Website" value={website} />
              <PersonData label="catchphrase" value={company.catchPhrase} />
              <PersonData label="Company Name" value={company.bs} />
            </div>
          </div>
          <div className={styles.addressContainer}>
            <PersonData label="Address" value={addressFinal} />
            <PersonData label="Phone" value={phone} />
          </div>
          <div>
            <Link href={"/people"}>
              <a className={buttonStyles.button}>Back</a>
            </Link>
            <Link href={"/"}>
              <a className={buttonStyles.button}>Home</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const responses: person[] = await data.json();

  interface paths {
    params: {
      id: string;
    };
  }

  const allPaths: paths[] = responses.map((el: any) => {
    return { params: { id: el.id.toString() } };
  });

  return {
    paths: [...allPaths],
    fallback: false,
  };
};

export const getStaticProps = async (props: { params: { id: string } }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.params.id}`
  );

  const response: person = await data.json();
  return {
    props: {
      person: response,
    },
  };
};

export default Render;
