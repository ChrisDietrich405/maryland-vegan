import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import data from "../../resources.db.json";

import styles from "./styles.module.css";

const Resources = () => {
  return (
    <>
      <Head>
        <title>Resources</title>
        <meta
          name="description"
          content="Resources is dedicated to the non profits in Maryland working to make the world a more peaceful place"
        />
      </Head>
      <>
      <h1>Resources</h1>
        <div className="container text-center my-4">
          <div className="row">
            {data.resources.map((resource) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                  <div className="card" style={{ minHeight: "200px" }}>
                    <a
                      className="card-body"
                      target="_blank"
                      href={resource.url}
                    >
                      <h5 className="card-title">{resource.name}</h5>
                      <p className="card-text">{resource.content}</p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};
export default Resources;
