import React, { Fragment } from "react";
import Head from "next/head";
import classes from "../../../styles/stateName.module.css";
const abia = [
  {
    id: "p1",
    title: "War Ship(NNS Bonny)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Biafran_War_ship.jpg/1024px-Biafran_War_ship.jpg",
    description:
      "it was used by the Nigerian Navy during the Biafra - Nigeria war",
  },
  {
    id: "p2",
    title: "Amakama Wooden Cave",
    image:
      "https://i0.wp.com/ijeawele.com/wp-content/uploads/2022/09/VideoCapture_20220527-142530_11.jpg?w=1068&ssl=1",
    description:
      "The cave is nothing more than a hollow tree, also known as Isienyi or Wonder tree, which was formed many decades ago as a result of community activities. The tree, which could house up to twenty people, served as a hideout for old men and women in the village during the civil war.",
  },
];
export default function Abia() {
  return (
    <Fragment>
      <Head className={classes.head}>
        <title>Abia State</title>
        <meta
          name="description"
          content="historical sites in Abia State"
        />
      </Head>
      <div className={classes.detail}>
        <ul>
          {abia.map((ab, i) => {
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
