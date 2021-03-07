import React, { useEffect, useState } from 'react';
import { rootReducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { IRequestData } from './interfaces/IRequestData';
import { getData } from './api/request';

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  const [data, setData] = useState<IRequestData[]>([]);

  useEffect(() => {
    const getListData = async () => {
      try {
        const listData = await getData();
        setData(listData);
      } catch (e) {
        console.log(e.error);
      }
    };
    getListData().then();
  });

  return (
    <Provider store={store}>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </Provider>
  );
}

export default App;
