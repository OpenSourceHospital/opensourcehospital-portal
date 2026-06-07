import * as React from 'react';
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import Fab from '@mui/material/Fab';

const Bhome = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      component={Link} to={{
        pathname: '/PatientHome',
      }}
    >
      <HomeIcon color="inherit" />
    </Fab>
  );
};

export default Bhome;