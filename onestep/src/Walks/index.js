import React, { useState, useEffect } from 'react';

import axios from 'axios';

import WalkPreview from './WalkPreview';

import styles from './index.module.scss';

const Walks = () => {
  // TODO: Move all to store
  const [walks, setWalks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadWalks = async () => {
      setIsLoading(true);
      try {
        const { data: { result } } = await axios.get('api/v3/take_home_project/my_walks');
        setWalks(result);
        setIsLoading(false);
      }
      catch (ex) {
        console.log(ex);
        setIsLoading(false);
        debugger;
      }
    };

    loadWalks();
  }, []);

  // TODO: If time, change to nicer spining circle for loading
  if (isLoading) {
    return <div>Loading..</div>;
  }

  return <div className={styles.walksContainer}>
    {walks.map(({ title, uuid, extraction_level }) => <WalkPreview key={uuid} title={title} extraction_level={extraction_level} id={uuid} />)}
  </div>;
};

export default Walks; 