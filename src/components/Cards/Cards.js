import React from 'react';
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
const Cards = ({page, fetchedData}) =>{
    let display;
    console.log(fetchedData);

    if(fetchedData){
        display=fetchedData.map(x=>{
            let {id, name,avatar}=x;

            return(
                <Link
                style={{ textDecoration: "none" }}
                to={`${page}${id}`}
                key={id}
                className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
              >
                    <div className={styles.cards}>
                        <img src={avatar} alt="" className={`${styles.img} img-fluid`} />
                        <div className={{padding: "20px"}}>
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                        </div>
                        <button className={styles.button} onClick={()=>sil(id)} to="/"> SİL </button>
                    </div>
                </Link>
            )
            //-------------SİLME KOMUTU--------------------------
            function sil(id){
                try{
                    return fetch(`https://5fc9346b2af77700165ae514.mockapi.io/simpsons/${id}`,
                     { method: 'DELETE' }
                     );
                }
                catch(err){
                    console.log(err);
                }
            }
            //-------------SİLME KOMUTU BİTİMİ-------------------
        });
    }else{
        display="";
    }
    return <>{display}</>;
};

export default Cards