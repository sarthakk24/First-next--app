import Link from "next/link";

const NavbarItem = (props: any) => {
  return <Link href={props.href}>{props.name}</Link>;
};

export default NavbarItem;
