import {Routing} from '../pages';
import {Header} from '../widgets/Header';
import './index.css';
import {useEffect} from "react";
import { useDispatch } from 'react-redux';
import {checkUserAuth} from '../store/userAuthSlice/slice'

export function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(checkUserAuth())
  }, [dispatch])

  return (
    <div className={'app'}>
      <Header />
      <Routing />
    </div>
  );
}


