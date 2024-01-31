import { useState } from 'react';
import Button from './Button/Button';

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: true,
        reason: 'help',
    });

    function handleNameChange(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length == 0,
        }));
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <form>
                <label htmlFor="name">Ваше имя</label>
                <input
                    type="text"
                    id="name"
                    className="control"
                    value={form.name}
                    style={{
                        border: form.hasError ? '1px solid red' : null,
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) =>
                        setForm((prev) => ({
                            ...prev,
                            reason: event.target.value,
                        }))
                    }
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="saggest">Предложение</option>
                </select>

                <pre>{JSON.stringify(form, null, 2)}</pre>

                <Button disabled={form.hasError} isActive={!form.hasError}>
                    Отправить
                </Button>
            </form>
        </section>
    );
}
