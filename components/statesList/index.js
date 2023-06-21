import React from "react";
import Link from "next/link"
import classes from "./index.module.css"
import { useRouter } from "next/router";
export default function Statelist(props) {
  const router = useRouter()
   const handleLinkClick = (stateName) => {
     router.push(`/stateslist/state-name/${stateName}`);
   };
  return (
    <div className={classes.stateNames}>
      <ul>
        <li>
          <Link href="/stateslist/state-name/Abia">
            <a onClick={() => handleLinkClick("Abia")}>Abia</a>
          </Link>
        </li>
        <li>
          <Link href="/stateslist/state-name/Adamawa">
            <a onClick={() => handleLinkClick("Adamawa")}>Adamawa</a>
          </Link>
        </li>
        <li>
          <Link href="/stateslist/state-name/AkwaIbom">
            <a onClick={() => handleLinkClick("AkwaIbom")}>Akwa Ibom</a>
          </Link>
        </li>
        <li>
          <Link href="/stateslist/state-name/Anambra">
            <a onClick={() => handleLinkClick("Anambra")}>Anambra</a>
          </Link>
        </li>
        <li>
          <Link href="/stateslist/state-name/Bauchi">
            <a onClick={() => handleLinkClick("Bauchi")}>Bauchi</a>
          </Link>
        </li>
        <li>
          <Link href="/stateslist/state-name/Bayelsa">
            <a onClick={() => handleLinkClick("Bayelsa")}>Bayelsa</a>
          </Link>
        </li>
        <li>
          <Link href="/stateslist/state-name/Benue">
            <a onClick={() => handleLinkClick("Benue")}>Benue</a>
          </Link>
        </li>
        <li>
          <Link href="/stateslist/state-name/Borno">
            <a onClick={() => handleLinkClick("Borno")}>Borno</a>
          </Link>
        </li>
        <li>
          <Link href="/stateslist/state-name/Cross%20River">
            <a onClick={() => handleLinkClick("Cross River")}>Cross River</a>
          </Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Delta</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Ebonyi</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Edo</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Ekiti</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Enugu</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Gombe</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Imo</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Jigawa</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Kaduna</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Kano</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Katsina</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Kebbi</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Kogi</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Kwara</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Lagos</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Nasarawa</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Niger</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Ogun</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Ondo</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Osun</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Oyo</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Plateau</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Rivers</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Sokoto</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Taraba</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Yobe</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">Zamfara</Link>
        </li>
        <li>
          <Link href="/stateslist/state-name">
            Federal Capital Territory (FCT)
          </Link>
        </li>
      </ul>
    </div>
  );
}
