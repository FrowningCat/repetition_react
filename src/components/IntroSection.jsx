import React from 'react';

// export default function IntroSetion() {
//     return (
//         <section>
//             <h1 className="centered">Lorem.</h1>
//             <h3 className="centered" style={{ color: '#666' }}>
//                 Lorem, ipsum dolor.
//             </h3>
//         </section>
//     );
// }

const e = React.createElement;

export default function IntroSetion() {
    return e('section', null, [
        e('h1', { className: 'centered', key: 1 }, 'Lorem.'),
        e(
            'h3',
            { className: 'centered', style: { color: '#666' }, key: 2 },
            'Lorem, ipsum dolor.'
        ),
    ]);
}
