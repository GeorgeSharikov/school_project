import {Routing} from '../pages';
import {Header} from '../widgets/Header';
import './index.css';

export function App() {
  return (
    <div className={'app'}>
      <Header />
      <Routing />
    </div>
  );
}


