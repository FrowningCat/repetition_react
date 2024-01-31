import { useEffect, useLayoutEffect, useState } from 'react';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export default function EffectSection() {
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        setLoading(true);
        const respose = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const users = await respose.json();
        setUsers(users);
        setLoading(false);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <section>
            <h3>Effects</h3>

            <Button
                style={{ marginBottom: '1rem' }}
                onClick={() => setModal(true)}
            >
                Открыть информацию
            </Button>

            <Modal open={modal}>
                <h3>Hello from model</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore omnis, non doloremque beatae nesciunt sed quia ab
                    rem facilis sunt!
                </p>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>

            {loading && <p>Loading</p>}
            {!loading && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </section>
    );
}
