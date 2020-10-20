import React, { FC, ReactElement } from 'react';

import style from './style.module.css';

const App: FC = (): ReactElement => (
    <h1>Hello, React! <span className={style.red}>Eeeeehaa!</span>
        <img width={'100%'} src="https://w-dog.ru/wallpapers/5/2/489084776959642/eda-sladkoe-pirog-yablochnyj-yabloki-yabloko-frukt-fon-oboi-shirokoformatnye-polnoekrannye-shirokoekrannye-shirokoformatnyj.jpg" />
    </h1>
);

export default App;