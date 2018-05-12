import * as React from "react";
import {withRouter } from 'react-router';
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

/**
 * To be able to figure out which page is actige a compose the componenet with withRouter method
 */
export default withRouter(
    ({ history }) => <Menu pointing={true} inverted={true}>
        <Menu.Item as={Link} to="/" name='Issues' active={history.location.pathname === '/'} />
        <Menu.Item as={Link} to="/about" name='about' active={history.location.pathname === '/about'} />
    </Menu>
);