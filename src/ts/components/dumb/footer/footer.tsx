/* footer.tsx */

import * as React from 'react';
import * as constants from '@store/constants';

import './footer.scss';
import { url } from 'inspector';

export class Footer extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
  }

  public render() {
    return (
      <React.Fragment>
        <div id="footerImg">
          Join the Kingdom for just $5
          <br />
          <a href='/sign-up' onClick={this.handleClick}>SIGN UP</a>
        </div>
        <footer>
          <FooterMenuItems />
          <br />
          <SocialIcons />
      </footer>
      </React.Fragment>
    );
  }
};

class FooterMenuItems extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  preventEvent = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  render(){
    return(
      <div id="footerMenuItems">
        {constants.footerMenuItems.map((link) => (
          <a href={link.link} key={link.text} onClick={this.preventEvent}>{link.text}</a>
        ))}
      </div>
    )
  }
}

class SocialIcons extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  preventEvent = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  render(){
    const allIcons = constants.socialIcons.map((icon, num) => {
      return <div className='social-icons' id={`${icon}`} key={num} />
    });

    return(
      <div id="socialIcons">
        {allIcons}
      </div>
    )
  }
}