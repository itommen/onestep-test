import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import Card from './Card';

import styles from './index.module.scss';

const SingleWalk = () => {
  const { id } = useParams();

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCards = async () => {
      setIsLoading(true);
      try {
        const { data: { cards } } = await axios.get(`api/v3/take_home_project/my_walks/${id}`);
        setCards(cards);
        setIsLoading(false);
        debugger
      }
      catch (ex) {
        console.log(ex);
        setIsLoading(false);
        debugger;
      }
    };

    loadCards();
  }, []);

  if(isLoading) {
    return <div>loading..</div>
  }

  return <div>
    <div>Single walk, id: {id}</div>
    <div className={styles.contentContainer}>      
      {/* No uniq value for card to use as key, title look uniq (guess?) */}
      {cards.map(({ title, rainbow, description }) => <Card key={title} title={title} description={description} rainbow={rainbow} />)}
    </div>
  </div>
};

export default SingleWalk;