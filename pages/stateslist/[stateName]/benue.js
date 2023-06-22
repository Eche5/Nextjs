import React, { Fragment } from "react";
import Head from "next/head";
import classes from "../../../styles/stateName.module.css";
const anambra = [
  {
    id: "p1",
    title: "Ogbunike Caves",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ogbunike-Cave-Oyi-Anambra-State.png",
    description:
      "The Ogba Ukwu Caves and Waterfalls presents one of the greatest natural tourist attractions in Anambra State, southeast Nigeria.",
  },
  {
    id: "p2",
    title: "Ogba-Ukwu Caves & Waterfall",
    image:
      "https://www.naija7wonders.com/wp-content/uploads/2020/08/Ogba-Ukwu-Caves-Waterfalls-768x768.jpg",
    description:
      "Sukur, popularly refereed as Sukur Cultural Landscape is a UNESCO World Heritage Site located on a hill above the village of Sukur in the Adamawa State.",
  },
];
export default function Anambra() {
  return (
    <Fragment>
      <Head>
        <title>Anambra State</title>
        <meta name="description" content="Historical sites in Anambra State" />
      </Head>
      <div className={classes.detail}>
        <ul>
          {anambra.map((ab, i) => {
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
