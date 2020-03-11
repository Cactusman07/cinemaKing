/* App.tsx */

import * as React from 'react';
import { Header, Movies, Intro, Footer } from './index';

class App extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <React.Fragment>
        <Header />
        <Intro />
        <Movies />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
