import React from 'react'
import styles from "./Add.module.scss";
import { Link } from "react-router-dom";
const Add = () =>{
    return(
        <Link  to={"/addnew"}>
        <div>
            <button className={styles.button}> + </button>
        </div>
        </Link>
    )
}

export default Add