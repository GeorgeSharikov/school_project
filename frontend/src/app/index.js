import {Routing} from '../pages';
import {Header} from '../widgets/Header';
import './index.css';
import {useEffect} from "react";
import { useDispatch } from 'react-redux';
import {checkUserAuth} from '../store/userAuthSlice/slice'
import { getPersonalData } from '../store/userPersonalData/slice';

export function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(checkUserAuth()).then(() => {
        dispatch(getPersonalData())
      })
  }, [dispatch])

  return (
    <div className={'app'}>
      <Header />
      <Routing />
    </div>
  );
}


