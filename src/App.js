import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './css/bootstrap.min.css';
import './App.css';
import LeftList from './components/LeftList';
import SelectedList from './components/SelectedList';

function App() {
  return (
    <Provider store={store}>
      <div className="App d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex">
              <LeftList />
            </div>
            <div className="col-6 d-flex">
              <SelectedList />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
