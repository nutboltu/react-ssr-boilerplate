import React from 'react';
import BasicTodos from './todos/BasicTodos';

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
};

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <div style={style}>
        <BasicTodos /> 
      </div>
    </div>
  );
};

export default Home;
