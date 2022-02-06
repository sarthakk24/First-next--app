import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>People Databases</h1>
      <Link href={"/people"}>Peoples</Link>
    </div>
  );
};

export default Home;
