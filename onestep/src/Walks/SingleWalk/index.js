import React from 'react';

import { useParams } from 'react-router-dom';

const SingleWalk = () => {
  const { id } = useParams();
  return <div>Single walk, id: {id}</div>
};

export default SingleWalk;