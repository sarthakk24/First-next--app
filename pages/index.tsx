import type { NextPage } from "next";

export interface person {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    gro: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Props {
  people: person[];
}

const Home: NextPage<Props> = (props) => {
  const data: string[] = props.people.map((el: person) => el.name);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const people: person[] = await res.json();

  return {
    props: {
      people,
    },
  };
}

export default Home;
