import React from 'react';
import { Hydrator as ClientHydrator, ServerHydrator } from './hoc/Hydrator';
import BasicTodos from './todos/BasicTodos';

let Hydrator = ClientHydrator;
let LoadablePartialHydrationTodos = () => import('./todos/PartialHydrationTodos');

if (typeof window === 'undefined') {
	Hydrator = ServerHydrator;
	LoadablePartialHydrationTodos = () => require('./todos/PartialHydrationTodos');
}

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
        <Hydrator load={LoadablePartialHydrationTodos} />
      </div>
    </div>
  );
};

export default Home;
