import React, { FC } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner: FC = () => (
    <Dimmer active inverted>
        <Loader size='large'>Подождите</Loader>
    </Dimmer>
);

export default Spinner;