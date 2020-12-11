import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import Card from './Card';

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

  return <div>
    <div>Single walk, id: {id}</div>
    <div>
      {/* TODO: Key temp */}
      {cards.map((x,index) => <Card key={index} {...x } />)}
    </div>
  </div>
};

export default SingleWalk;