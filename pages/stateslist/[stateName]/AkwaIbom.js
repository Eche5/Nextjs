import React, { Fragment } from "react";
import Head from "next/head";
import classes from "../../../styles/stateName.module.css";
const akwaIbom = [
  {
    id: "p1",
    title: "Ibeno Beach",
    image:
      "https://guardian.ng/wp-content/uploads/2018/07/Ibeno-Beach-nigeria-tourism.jpg",
    description:
      "One of such captivating sites is the longest beach in Nigeria. It is a wonder to know that such an exotic location exists right here in Nigeria.The Ibeno beach is in Akwa Ibom state and stretches for 45 kilometres to Jamestown. It is a tourist attraction for families and fun lovers. The sand is picturesque and beautiful it looks like something from a fantasy film",
  },
  {
    id: "p2",
    title: "Godswill Akpabio Stadium",
    image: "https://guardian.ng/wp-content/uploads/2018/07/The-sports-bay.jpg",
    description:
      "The Godswill Akpabio International Stadium is an all-seater national sports stadium located in Uyo, the state capital of Akwa Ibom.",
  },
];
export default function AkwaIbom() {
  return (
    <Fragment>
      <Head>
        <title>Akwa Ibom State</title>
        <meta
          name="description"
          content="Historical sites in Akwa Ibom State"
        />
      </Head>
      <div className={classes.detail}>
        <ul>
          {akwaIbom.map((ab, i) => {
            return (
              <li key={ab.id}>
                <img src={ab.image} />
                <h1>{ab.title}</h1>
                <p>{ab.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}
