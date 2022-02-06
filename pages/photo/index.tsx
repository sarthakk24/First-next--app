const Photo = (props: { peoples: any }) => {
  return <div>photos</div>;
};

export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const peoples = await data.json();
  return {
    props: { peoples },
  };
};

export default Photo;
