/* intro.tsx */

import * as React from 'react';

import './intro.scss';

export class Intro extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div id="intro">
        <div id="introHead" />
        <div id="introContent">
          <div id="authorInfo">
            by <span id="author">Liam Coxon</span>
            <br />
            Contributor
            <br />
            <span id="introDate">March 10 2020</span>
          </div>
          <div id="introText">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div id="introFoot" />
      </div>
    );
  }
}
