import React from "react";

import styles from './NotFoundBlock.module.scss'


const NotFoundBlock = () => {
  return(
    <div className={styles.root}>
      <h1>
        <span>🤔</span>
        <br/>
        Not Found any information
      </h1>
      <p className={styles.description}>Sorry, this page is not available in our app.</p>
    </div>
    
  )
}

export default NotFoundBlock;