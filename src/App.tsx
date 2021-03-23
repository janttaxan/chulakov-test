import { rootReducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Layout } from './components/Layout/Layout';
import { CardListContainer } from './components/CardListContainer';
import { Header } from './components/Header/Header';
import { ButtonUp } from './components/ButtonUp';
import { useEffect } from 'react';
import { addScrollBehavior } from './utils/addScrollBehavior';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

function App() {

  useEffect(() => {
    addScrollBehavior().then();
  });

  return (
    <Provider store={store}>
      <Header/>
      <Layout>
        <CardListContainer/>
        <ButtonUp/>
      </Layout>
    </Provider>
  );
}

export default App;
