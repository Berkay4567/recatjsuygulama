import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";
const CardDetails = () => {
    let { id } = useParams();
  
    let [fetchedData, updateFetchedData] = useState([]);
    let { name, job, avatar, about } = fetchedData;
  
    let api = `https://5fc9346b2af77700165ae514.mockapi.io/simpsons/${id}`;
  
    useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        updateFetchedData(data);
      })();
    }, [api]);
  
    return (
      <div className="container d-flex justify-content-center mb-5">
        <div className="d-flex flex-column gap-3">
          <h1 className="text-center">{name}</h1>
          <img className="img-fluid" src={avatar} alt="" />
          <div className="content">
            <div className="">
              <span className="fw-bold">Job : </span>
              {job}
            </div>
            <div className="">
              <span className="fw-bold">About: </span>
              {about}
            </div>
            <br/>
            <Link className="mt-3 w-100 text-center" to="/">
						<button className={styles.button2} >Geri Dön</button>
			</Link>
          </div>
        </div>
      </div>
    );
  };

export default CardDetails