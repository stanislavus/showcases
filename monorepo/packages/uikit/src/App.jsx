import React from 'react';
import { Button } from 'reactstrap'

import styles from './App.scss';

const App = () => {
  console.log(styles);
  return (
    <React.StrictMode>
      <div className={styles.root}>Hello <span className={styles.tail}>World!!!</span></div>
      <Button color="primary">Simple Button</Button>
    </React.StrictMode>
  );
};
export default App;