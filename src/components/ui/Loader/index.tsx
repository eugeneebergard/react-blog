import React from 'react';
import './Loader.scss';

const Loader: React.FC = () =>  {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '.5rem' }}>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
