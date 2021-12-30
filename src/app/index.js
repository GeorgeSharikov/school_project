import { Routing } from '../pages';
import { Header } from '../widgets/Header';
// import { Bookmark } from '../shared/core-ui/icons/bookmark';
// import { ComsIcon } from '../shared/core-ui/icons/commentsIcon';
import './index.css';

export function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}


