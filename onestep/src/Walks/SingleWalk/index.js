import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useParams } from 'react-router-dom';

const SingleWalk = () => {
  const { id } = useParams();

  const [paramters, setParamters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadParamters = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`api/v3/take_home_project/my_walks/${id}`);
        // setParamters(result);
        setIsLoading(false);
        debugger
      }
      catch (ex) {
        console.log(ex);
        setIsLoading(false);
        debugger;
      }
    };

    loadParamters();
  }, []);

  return <div>Single walk, id: {id}</div>
};

export default SingleWalk;