import React from 'react';
import Loadable from 'react-loadable';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './Home'),
  loading: () => <div>Loading...</div>
});


const App = () => (
  <div className="app">
      <LoadableHome />
    <footer />
  </div>
);

export default App;
