import React from 'react';

import { Link } from 'react-router-dom';

// Currently only 'link' - but exported to function to help myself if i have time to perfect it in the end
const WalkPreview = ({ title, id }) => <Link to={`/${id}`}>{title}</Link>

export default WalkPreview;