import React from 'react';

const SingleWalkParamter = ({title, rainbow, description}) => {
  return <div>
    <span>{title}</span>
    <span>{JSON.stringify(rainbow)}</span> {/* TODO: Widget */}
    <span>{description}</span>

  </div>
} ;

export default SingleWalkParamter;