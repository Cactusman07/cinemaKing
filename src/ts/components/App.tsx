/* App.tsx */

import * as React from 'react';
import { Header, Movies } from './index';

class App extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <React.Fragment>
           <Header />
        
        {/*<div>
          
        </div> */}
        <Movies />
        {/*<Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
