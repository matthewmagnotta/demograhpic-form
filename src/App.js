import React, { createContext, useContext, useState } from 'react';
import './App.css';
// mui
import { makeStyles } from '@material-ui/core';
// components
import Form from './Form/Form';
export const FormContext = createContext({});

const useStyles = makeStyles(() => {
  return {
    banner: {
      // purple
      background: '#613395',
      width: '100%',
      height: '20rem',
      position: 'relative',
    },
  };
});

function App() {
  const classes = useStyles();
  const [state, setState] = useState({});
  const values = { state, setState };

  return (
    <FormContext.Provider value={values}>
      <div className="App">
        <div className={classes.banner}></div>
        <Form />
      </div>
    </FormContext.Provider>
  );
}

export default App;
