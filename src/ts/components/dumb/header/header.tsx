/* header.tsx */

import * as React from 'react';

import { Menu } from '../../index';
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
          <Menu />
        </div>
        <div id="siteHero">
          <h1>Sci-fi Movies of the decade</h1>
        </div>
      </header>
    );
  }
}
