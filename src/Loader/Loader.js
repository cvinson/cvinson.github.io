import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './Loader.css';

export default () => {
  return (
    <div className="Loader">
      <div className="Spinner">
      <CircularProgress />
      </div>
    </div>
  );
}
