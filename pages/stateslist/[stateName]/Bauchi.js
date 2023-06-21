import React from "react";
import classes from "../../../styles/stateName.module.css";
const bauchi = [
  {
    id: "p1",
    title: "Tunga Dutse",
    image:
      "http://2.bp.blogspot.com/-5gEcT4QRTXw/UxOaPMtsQ2I/AAAAAAAADt8/C-0swMDRKDc/s1600/DSC04327.JPG",
    description:
      "Dutse is popular for the ancient engraving on the rocks. If you don?t believe me, look at the writing on the wall. The writings are large and cover a huge area on the sandstone embankment. The meaning and age of the inscriptions are yet to be determined but they are one of the most significant wall writings to be found in Bauchi and Nigeria in general.",
  },
  {
    id: "p2",
    title: "Yankari",
    image: "https://gazettengr.com/wp-content/uploads/images-2-largejpg2.jpg",
    description:
      "Everyone knows about Yankari games reserve or you must have at least heard about it once in your lifetime. If not, then under what rock have you been living under? The park is home to the largest collection of elephants in Nigeria and one of the largest in West Africa. ?So yes, a large number of large mammals.",
  },
];
export default function Bauchi() {
  return (
    <div className={classes.detail}>
      <ul>
        {bauchi.map((ab, i) => {
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
  );
}
