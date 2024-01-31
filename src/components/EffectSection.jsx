import { useEffect, useState, useCallback } from 'react';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import useInput from '../hooks/useInput';

export default function EffectSection() {
    const input = useInput();
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const respose = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const users = await respose.json();
        setUsers(users);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

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
                <>
                    <input type="text" className="control" {...input} />
                    <h6>{input.value}</h6>
                    <ul>
                        {users
                            .filter((user) =>
                                user.name
                                    .toLowerCase()
                                    .includes(input.value.toLowerCase())
                            )
                            .map((user) => (
                                <li key={user.id}>{user.name}</li>
                            ))}
                    </ul>
                </>
            )}
        </section>
    );
}
