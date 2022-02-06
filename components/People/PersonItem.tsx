import Link from "next/link";
import { person } from "../../pages/index";

const PersonItem = (props: { person: person }): JSX.Element => {
  return (
    <div>
      <Link href={`/people/${props.person.id}`} passHref>
        {props.person.name}
      </Link>
    </div>
  );
};

export default PersonItem;
