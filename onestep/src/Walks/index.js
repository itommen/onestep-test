import React, { useState, useEffect } from 'react';

import axios from 'axios';
import List from '@material-ui/core/List';

import WalkPreview from './WalkPreview';

import styles from './index.module.scss';

// Notes: 
// 1. In order to add filters, create another array (filteredData) & filters array & by any filter change filter the original array into the filtered data
// 2. Loads should be inside stores (mobx / redux), for 2 pages used hooks
const Walks = () => {
  const [walks, setWalks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadWalks = async () => {
      setIsLoading(true);
      try {
        const { data: { result } } = await axios.get('my_walks');
        setWalks(result);
        setIsLoading(false);
      }
      catch (ex) {
        console.log(ex);
        setIsLoading(false);
        // Notify user about failed request, maybe resend request after x time
      }
    };

    loadWalks();
  }, []);

  // TODO: If time, change to nicer spining circle for loading
  if (isLoading) {
    return <div>Loading..</div>;
  }

  return <div className={styles.walksContainer}>
    <List component="nav" >
      {walks.map(({ title, uuid, extraction_level }) => <WalkPreview key={uuid} title={title} extraction_level={extraction_level} id={uuid} />)}
      {!walks?.length && 'No walks found'}
    </List>
  </div>;
};

export default Walks; 