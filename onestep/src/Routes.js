import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import WalksRoutes from './Walks/Routes';

const Routes = () => <Router>
  <WalksRoutes />
</Router>

export default Routes;