import Header from './components/Header';
import { WayToTeach } from './components/WayToTeach';
import Button from './components/Button/Button';
import { useState } from 'react';
import { ways, differences } from './data';

export default function App() {
    const [content, setContent] = useState('Нажми на кнопку');

    function handlClick(type) {
        setContent(type);
    }

    return (
        <div>
            <Header />
            <main>
                <section>
                    <h3>Lorem, ipsum.</h3>

                    <ul>
                        <WayToTeach
                            title={ways[0].title}
                            description={ways[0].description}
                        />
                        <WayToTeach {...ways[1]} />
                        <WayToTeach {...ways[2]} />
                        <WayToTeach {...ways[3]} />
                    </ul>
                </section>
                <section>
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </h3>
                    <Button onClick={() => handlClick('way')}>Подход</Button>
                    <Button onClick={() => handlClick('easy')}>
                        Доступность
                    </Button>
                    <Button onClick={() => handlClick('program')}>
                        Концентрация
                    </Button>
                    <p>{differences[content]}</p>
                </section>
            </main>
        </div>
    );
}
