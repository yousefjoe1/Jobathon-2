import React from 'react';


import LogIn from './components/Log_In/LogIn';



function App() {

  const submit = (username,password)=> {
    console.log(username,password);
  }
  
  return (
    <>
    <LogIn submit={submit} />
    </>
  );
}

export default App;
