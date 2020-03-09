/* App.tsx */

import * as React from 'react';
import { Header } from './index';

class App extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <React.Fragment>
           <Header />
        
        {/*<div>
          <Movies />
        </div>
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
