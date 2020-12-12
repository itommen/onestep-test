import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import Header from './Header';
import Card from './Card';

import styles from './index.module.scss';

const SingleWalk = () => {
  const { id } = useParams();

  const [cards, setCards] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCards = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(`my_walks/${id}`);
        console.log(result);

        const { data: { cards, metadata } } = result;
        // TODO: only way i saw to identify missing values
        setCards(cards.filter(({ description }) => description));
        setMetadata(metadata);
        setIsLoading(false);
      }
      catch (ex) {
        console.log(ex);
        setIsLoading(false);
      }
    };

    loadCards();
  }, []);

  if (isLoading) {
    return <div>loading..</div>
  }

  return <div>
    <Header steps={metadata.steps} timestamp={metadata.timestamp} seconds={metadata.seconds} />
    <div className={styles.contentContainer}>
      <div className={styles.cardsContainer}>
        {/* No uniq value for card to use as key, title look uniq (guess?) */}
        {cards.map(({ title, rainbow, description }) => <Card key={title} title={title} description={description} rainbow={rainbow} />)}
      </div>
      <div className={styles.insightsContainer}>
        test
      </div>
    </div>
  </div>
};

export default SingleWalk;