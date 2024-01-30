import { useState } from 'react';
import Header from './components/Header/Header';
import TeachingSection from './components/TeachingSection';
import DifferencesSection from './components/DifferencesSection';
import IntroSetion from './components/IntroSection';
import TabsSection from './components/TabsSection';
import FeedbackSection from './components/FeedbackSection';

export default function App() {
    const [tab, setTab] = useState('feedback');

    return (
        <>
            <Header />
            <main>
                <IntroSetion />
                <TabsSection
                    active={tab}
                    onChange={(current) => setTab(current)}
                />

                {tab == 'main' && (
                    <>
                        <TeachingSection />
                        <DifferencesSection />
                    </>
                )}

                {tab == 'feedback' && <FeedbackSection />}
            </main>
        </>
    );
}
