import Button from './Button/Button';
import { useState } from 'react';
import { differences } from '../data';

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null);

    function handlClick(type) {
        setContentType(type);
    }

    // let tabContent = null;

    // if (contentType) {
    //     tabContent = <p>{differences[contentType]}</p>;
    // } else {
    //     tabContent = <p>Нажми на кнопку</p>;
    // }

    return (
        <section>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
            <Button
                isActive={contentType == 'way'}
                onClick={() => handlClick('way')}
            >
                Подход
            </Button>
            <Button
                isActive={contentType == 'easy'}
                onClick={() => handlClick('easy')}
            >
                Доступность
            </Button>
            <Button
                isActive={contentType == 'program'}
                onClick={() => handlClick('program')}
            >
                Концентрация
            </Button>

            {/* {contentType ? (
                        <p>{differences[contentType]}</p>
                    ) : (
                        <p>Нажми на кнопку</p>
                    )} */}

            {/* {!contentType ? <p>Нажми на кнопку</p> : null}
                    {contentType ? <p>{differences[contentType]}</p> : null} */}

            {/* {tabContent} */}

            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{differences[contentType]}</p>}
        </section>
    );
}
