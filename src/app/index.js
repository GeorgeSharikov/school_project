import {Routing} from '../pages';
import {Header} from '../widgets/Header';
import './index.css';
import {SideBar} from "../widgets/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <Routing />
    </div>
  );
}


