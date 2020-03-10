/* menu.tsx */

import * as React from 'react';
import { Button, Drawer, Toolbar } from 'react-md';
import * as constants from '@store/constants';

import './menu.scss';

export class Menu extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      visible: false, position: 'right'
    };
  }

  openDrawerRight = () => {
    this.setState({ visible: true, position: 'right' });
  }

  closeDrawer = () => {
    this.setState({ visible: false });
  }

  handleVisibility = (visible) => {
    this.setState({ visible });
  };

  public render() {
    const { visible, position } = this.state;
    const isRight = position === 'right';
    const closeBtn = <Button icon onClick={ this.closeDrawer }>{isRight ? 'close' : 'arrow_back'}</Button>

    return (
      <React.Fragment>
        <div className="show-mobile">
          <Button flat id="mobileMenu" onClick={this.openDrawerRight}>
            MENU
          </Button>
          <Drawer
            id="menuDrawer"
            type={Drawer.DrawerTypes.TEMPORARY}
            visible={visible}
            position={position}
            onVisibilityChange={this.handleVisibility}        
            header={(
              <React.Fragment>
                <Toolbar
                  nav={isRight ? null : closeBtn}
                  actions={isRight ? closeBtn : null}
                  className="md-divider-border md-divider-border--bottom"
                />
                <MenuItems />
              </React.Fragment>
              
            )}
          />
        </div>
        <div className="show-desktop">
          <MenuItems />
        </div>
      </React.Fragment>
    );
  }
}

class MenuItems extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false, position: 'right'
    };
  }

  preventEvent = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  render(){
    return(
      <div id="menuItems">
        {constants.menuItems.map((link) => (
          <a href={link.link} key={link.text} onClick={this.preventEvent}>{link.text}</a>
        ))}
      </div>
    )
  }
}