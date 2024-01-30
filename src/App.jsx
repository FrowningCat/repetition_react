import Header from './components/Header';
import { WayToTeach } from './components/WayToTeach';
import Button from './components/Button/Button';
import { ways } from './data';

export default function App() {
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
                    <Button>Подход</Button>
                    <Button>Доступность</Button>
                    <Button>Концентрация</Button>
                </section>
            </main>
        </div>
    );
}
