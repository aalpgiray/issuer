import * as React from "react";
import {withRouter } from 'react-router';
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

export default withRouter(
    ({ history }) => <Menu pointing={true} inverted={true}>
        <Menu.Item as={Link} to="/" name='Issues' active={history.location.pathname === '/'} />
        <Menu.Item name='filters' as={Link} to="/filters" active={history.location.pathname === '/filters'} />
        {/* <Menu.Menu position='right'>
            <Menu.Item>
                <Input inverted={true} icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item name='logout' />
        </Menu.Menu> */}
    </Menu>
);