const Render = (props: any) => {
  return <div>{props.person.name}</div>;
};

export const getStaticPaths = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const responses = await data.json();
  const allPaths = responses.map((el: any) => {
    return { params: { id: el.id.toString() } };
  });

  return {
    paths: [...allPaths],
    fallback: false,
  };
};

interface Props {
  params: {
    id: string;
  };
}

export const getStaticProps = async (props: Props) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.params.id}`
  );

  const response = await data.json();
  return {
    props: {
      person: response,
    },
  };
};

export default Render;
