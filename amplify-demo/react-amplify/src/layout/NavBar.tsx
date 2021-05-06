import { AmplifySignOut } from '@aws-amplify/ui-react';
import logo from '../logo.svg';
import React, { FC } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

type NavProps = {
  username: string;
}

 const NavBar: FC<NavProps> = (navProps) => {
  const { username } = navProps;
  return (
    <Menu block='true' inverted>
      <Container>
        <Menu.Item header>
          <img src={logo} alt="logo" />
          Hello {username} !!
        </Menu.Item>
        <Menu.Item position='right'>
          <AmplifySignOut />
        </Menu.Item>
      </Container>
    </Menu>
  )
}
export default NavBar;