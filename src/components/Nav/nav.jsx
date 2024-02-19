import AnchorLink from "react-anchor-link-smooth-scroll";
import classes from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <AnchorLink href="#Projects">Projects</AnchorLink>
      <AnchorLink href="#About"> About </AnchorLink>
      <AnchorLink href="#Contact"> Contact </AnchorLink>
    </nav>
  );
}
