import React from 'react'
import classes from '../styles/newsites.module.css'
export default function newsites() {
  return (
    <div className={classes["photo-collage"]}>
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ae/14/2a/the-long-route-the-slaves.jpg?w=1200&h=-1&s=1"
        alt="Photo 1"
      />
      <img
        src="https://guardian.ng/wp-content/uploads/2016/04/Idanre-Hills.jpg"
        alt="Photo 2"
      />
      <img src="photo3.jpg" alt="Photo 3" />
    </div>
  );
}
