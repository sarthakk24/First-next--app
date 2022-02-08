import styles from "../../styles/home/Navbar.module.css";
import NavbarItem from "./NavbarItem";
import { GiHumanPyramid } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className={`${styles.colourBg} colourWhite ${styles.navbar}`}>
      <ul className="flex">
        <li>
          <NavbarItem href="/people" name="People" />
        </li>
        <li>
          <GiHumanPyramid />
          <NavbarItem href="/" name="Human Database" />
        </li>
        <li>
          <NavbarItem href="/people/1" name="Example" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
