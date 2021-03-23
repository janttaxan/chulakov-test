import { rootReducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Layout } from './components/Layout/Layout';
import { CardListContainer } from './components/CardListContainer';
import { Header } from './components/Header/Header';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Header/>
        <main>
          <CardListContainer/>
        </main>
      </Layout>
    </Provider>
  );
}

export default App;
