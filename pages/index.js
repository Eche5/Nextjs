import React, { Fragment } from "react";
import classes from "../styles/Home.module.css";
import Head from "next/head";
export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Historical Sites</title>
        <meta
          name="description"
          content="Browse a huge list of historical sites in nigeria"
        />
      </Head>
      <div className={classes.collage}>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg160cItoeiQnq6BgWxGhT-rhEe-X7zvguBai3o_4M5oTASsQlNJR_ns2kS2xpNTPz3XGKDMWvhb9osvxNQnS54ajgw2O6GJYW5kfg9ofFDnqt97FDrqWoxl4kFyLlGlxJWuhHbKWWYvzoRqfoPoCV6qJCvg0UpfOEzaSSX-nbkie5qVhEGnUw1GnFp/s1200/1untitled.jpg"
          alt="Image 1"
          className={classes.imageItem}
        />
        <img
          src="https://kiddiesafricanews.com/wp-content/uploads/2020/10/Cultural-diversity.jpg"
          alt="Image 2"
          className={classes.imageItem}
        />
        <img
          src="https://kiddiesafricanews.com/wp-content/uploads/2020/10/Nigerial-Cultural-diversity-e1601673077460.jpg"
          alt="Image 3"
          className={classes.imageItem}
        />
        <div className={classes.videoItem}>
          <iframe
            src="https://twitter.com/i/status/1517782520074547200"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            className={classes.videoIframe}
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
}
