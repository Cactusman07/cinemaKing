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
          <div id="authorInfo">
            Lorum ipsum
          </div>
          <div id="introContent">
            Lorum ipsum
          </div>
        <div id="introFoot" />
      </div>
    );
  }
}
