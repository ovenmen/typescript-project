import React, { FC } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navigation: FC = () => (
    <Menu secondary>
        <Menu.Item
            name="Home"
            as={Link}
            to='/'
        />
        <Menu.Item
            name="About"
            as={Link}
            to='/about'
        />
        <Menu.Item
            name="Profile"
            as={Link}
            to='/profile'
        />
    </Menu>
);

export default Navigation;