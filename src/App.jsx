import Header from './components/Header';
import TeachingSection from './components/TeachingSection';
import DifferencesSection from './components/DifferencesSection';
import IntroSetion from './components/IntroSection';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <IntroSetion />
                <TeachingSection />
                <DifferencesSection />
            </main>
        </>
    );
}
