import { Routing } from '../pages';
import { Header } from '../widgets/Header';
// import { Bookmark } from '../shared/components/icons/bookmark';
// import { ComsIcon } from '../shared/components/icons/commentsIcon';
import './index.css';

export function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}


