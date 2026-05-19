import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Timer } from 'lucide-react';

export function App() {
    return (
        <>
        <Heading>
            Olá mundo!
            <button>
                <Timer/>
            </button>
        </Heading>
        <p>Bem-vindo ao React!</p>
        </>
    );
}