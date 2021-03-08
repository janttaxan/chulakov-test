import React from 'react';
import { rootReducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { CardListContainer } from './components/CardListContainer';
import { Layout } from './components/Layout/Layout';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <CardListContainer/>
      </Layout>
    </Provider>
  );
}

export default App;
