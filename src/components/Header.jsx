import logo from '/vite.svg';

export default function Header() {
    const now = new Date();
    const name = 'Vite logo';

    return (
        <header>
            <img src={logo} alt={name} />
            {/* <h3>Test vite</h3> */}

            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    );
}
