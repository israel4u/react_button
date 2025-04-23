import { Component } from 'react';
import Button from './components/MyButton';
import styles from './Modules/wrapper.module.css';

function App() {
 

  return (
    <div>
      <h1>Buttons Controlled Separately</h1>
      <p className={styles.description}>The buttons increase separately as you click each of them.</p>
      <div className={styles.container}>
        <div className="buttonOne"><Button /></div>
        <div className="buttonTwo"><Button /></div>
      </div>
     
    </div>
  )
}

export default App
