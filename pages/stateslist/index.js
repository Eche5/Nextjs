import React, { Fragment } from "react";
import Statelist from "../../components/statesList";
import Head from "next/head";
export default function Statelists() {
  return (
    <Fragment>
      <Head>
        <title>All States</title>
        <meta
          name="description"
          content="Browse a huge list of historical sites in nigeria"
        />
      </Head>
      <Statelist />
    </Fragment>
  );
}
