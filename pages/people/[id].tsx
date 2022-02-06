import Link from "next/link";
import { person } from "../index";

const Render = (props: { person: person }) => {
  return (
    <div>
      {props.person.name}
      <Link href={"/people"}>Back</Link>
      <Link href={"/"}>Home</Link>
    </div>
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
