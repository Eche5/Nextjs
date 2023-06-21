import classes from "./MainNavigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <h2>Historic Sites</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/stateslist">All States</Link>
          </li>
          <li>
            <Link href="/newsites">Most Visited</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
