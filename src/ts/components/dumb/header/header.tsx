/* header.tsx */

import * as React from 'react';

import './header.scss';

export class Header extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <header>
        <div id="menu">
          <div id="logo">
            <span className="bold">Cinema</span>King
          </div>
        </div>
        <div id="site-hero">
          <h1>Sci-fi Movies of the decade</h1>
        </div>
      </header>
    );
  }
}
