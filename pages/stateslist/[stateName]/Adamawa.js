import React, { Fragment } from "react";
import Head from "next/head";
import classes from "../../../styles/stateName.module.css";
const adamawa = [
  {
    id: "p1",
    title: "Mandara Mountains",
    image:
      "https://i0.wp.com/outravelandtour.com/wp-content/uploads/2019/11/Mandara-mountains.jpg?w=570&ssl=1",
    description:
      " The Mandara Mountains are a volcanic range extending about 190 km along the northern part of the Cameroon-Nigeria border.",
  },
  {
    id: "p2",
    title: "Sukur Kingdom",
    image:
      "https://i0.wp.com/outravelandtour.com/wp-content/uploads/2019/11/Sukur-Kingdom.jpg?resize=1024%2C731&ssl=1",
    description:
      "Sukur, popularly refereed as Sukur Cultural Landscape is a UNESCO World Heritage Site located on a hill above the village of Sukur in the Adamawa State.",
  },
];
export default function Adamawa() {
  return (
    <Fragment>
      <Head>
        <title>Adamawa state</title>
        <meta
          name="description"
          content="historical sites in Adamawa State"
        />
      </Head>
      <div className={classes.detail}>
        <ul>
          {adamawa.map((ab, i) => {
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
