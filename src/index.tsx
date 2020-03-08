import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './ts/components/App';
import { store, persistor } from './ts/store/store';

import './style.scss';
import { PersistGate } from 'redux-persist/integration/react';

class Main extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));