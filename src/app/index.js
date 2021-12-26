import { Routing } from '../pages';
import { Bookmark } from '../shared/core-ui/icons/bookmark';
import { ComsIcon } from '../shared/core-ui/icons/commentsIcon';
import './index.css';

export function App() {
  return (
    <div className="App">
      <ComsIcon/>
      <Bookmark />
      <Routing />
    </div>
  );
}


