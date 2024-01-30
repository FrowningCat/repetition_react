import logo from '/vite.svg';
import { useState } from 'react';

export default function Header() {
    const [now, setNow] = useState(new Date());
    const name = 'Vite logo';

    setInterval(() => setNow(new Date()), 1000);

    return (
        <header>
            <img src={logo} alt={name} />

            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    );
}
