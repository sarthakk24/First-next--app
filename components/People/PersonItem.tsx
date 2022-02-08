import Link from "next/link";
import Avatar from "react-avatar";
import { person } from "../../interface";
import styles from "../../styles/people/personItem.module.css";
import PersonData from "./PersonData";

const PersonItem = (props: { person: person }): JSX.Element => {
  return (
    <div>
      <Link href={`/people/${props.person.id}`} passHref>
        <div className={`flex ${styles.container}`}>
          <div>
            <Avatar name={props.person.name} className={styles.avatar} />
          </div>
          <div>
            <PersonData label="Name" value={props.person.name} />
            <PersonData label="UserName" value={props.person.username} />
            <PersonData label="Email" value={props.person.email} />
            <PersonData label="Company" value={props.person.company.name} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PersonItem;
