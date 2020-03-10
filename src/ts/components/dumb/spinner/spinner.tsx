/* spinner.tsx */

import * as React from 'react';

import './spinner.scss';

export class Spinner extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div id="spinner">
        
        <div className="loader">          
          <i className="loader__tile loader__tile__1"/>
          <i className="loader__tile loader__tile__2"/>
          <i className="loader__tile loader__tile__3"/>
          <i className="loader__tile loader__tile__4"/>
          <i className="loader__tile loader__tile__5"/>
          <i className="loader__tile loader__tile__6"/>
          <i className="loader__tile loader__tile__7"/>
          <i className="loader__tile loader__tile__8"/>
          <i className="loader__tile loader__tile__9"/>
          <br />
          Loading...
        </div>
      </div>
    );
  }
}
