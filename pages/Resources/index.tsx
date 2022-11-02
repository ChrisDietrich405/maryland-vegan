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
      <div className="container text-center my-4">
        <div className="row">
          {data.resources.map((resource) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-5" >
                <div className="card" style={{minHeight: "200px"}}>
                  <a className="card-body" target="_blank" href={resource.url}>
                    <h5 className="card-title">{resource.name}</h5>
                    <p className="card-text">{resource.content}</p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
      <h1>Resources</h1>

      <ul>
        <li>
          <a
            href="https://www.afrovegansociety.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Afro Vegan Society
          </a>
          <p>
            Afro-Vegan Society is a Baltimore based national nonprofit
            organization with a mission to provide resources and support to help
            people in marginalized communities transition to vegan living.
          </p>
        </li>
        <li>
          <a
            href="https://www.animalsanctuary.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poplar Spring Animal Sanctuary
          </a>
          <p>
            Poplar Spring Animal Sanctuary is a 400 acre non-profit refuge in
            Poolesville, Maryland for farm animals and wildlife.{" "}
          </p>
        </li>
        <li>
          <a
            href="https://blackvegsociety.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Black Veg Society
          </a>
          <p>
            The Black Veg Society’s mission is to educate the public,
            particularly BIPOC communities, on the benefits of veganism and the
            plant-based diet.
          </p>
        </li>
        <li>
          <a
            href="https://earthsavebaltimore.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Earthsave Baltimore
          </a>
          <p>
            Earthsave Baltimore is a local non profit dedicated to promoting all
            aspects of veganism. It hosts potlucks, restaurant get togethers and
            speaking events.
          </p>
        </li>

        <li>
          <a
            href="https://www.vrg.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vegetarian Resource Group
          </a>
          <p>
            Vegetarian Resource Group is a non profit dedicated to educating the
            public about the benefits of a vegan lifestyle.
          </p>
        </li>
        <li>
          <a
            href="https://www.facebook.com/groups/163345897614371"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maryland Vegan Families
          </a>
          <p>
            Maryland Vegan Families is a Facebook group dedicated to supporting
            and providing resources to vegan families living in Maryland
          </p>
        </li>
        <li>
          <a
            href="https://www.vrg.ohttps://www.facebook.com/groups/509056979150170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baltimore Vegans
          </a>
          <p>
            Baltimore Vegans is a Facebook group dedicated to encouraging
            veganism and supporting vegans in Baltimore
          </p>
        </li>
        <li>
          <a
            href="https://www.pcrm.org/barnard-medical-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barnard Medical Center
          </a>
          <p>
            Barnard Medical Center is a 100% vegan medical center dedicated to
            helping people improve their health
          </p>
        </li>
        <li>
          <a
            href="https://www.vrg.ohttps://www.facebook.com/groups/509056979150170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baltimore Vegans
          </a>
          <p>
            Baltimore Vegans is a Facebook group dedicated to encouraging
            veganism and supporting vegans in Baltimore
          </p>
        </li>
        <li>
          <a
            href="https://www.vrg.ohttps://www.facebook.com/groups/509056979150170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baltimore Vegans
          </a>
          <p>
            Baltimore Vegans is a Facebook group dedicated to encouraging
            veganism and supporting vegans in Baltimore
          </p>
        </li>
      </ul>
    </>
  );
};
export default Resources;
