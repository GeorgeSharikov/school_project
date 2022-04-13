import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSelectors } from "../../store/userAuthSlice/slice";
import { getOtherPersonalData, personalDataSelectors } from "../../store/userPersonalData/slice";
import { useEffect } from "react";

export const Profile = (props) => {
    const dispatch = useDispatch()

    const {id} = useParams()
    const myId = useSelector(state => userAuthSelectors.getUserPersonalId(state)) 
    const isMyOwn = id === myId
    useEffect(() => {
        if(!isMyOwn){
            dispatch(getOtherPersonalData({id}))
        }
    }, [isMyOwn,id,dispatch])

    const userData = useSelector(state => personalDataSelectors.getPeronalData(state, isMyOwn))
    console.log(userData)
    return (
        <div>
            asdasd
        </div>
    );
}
