import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSelectors } from "../../store/userAuthSlice/slice";
import { getOtherPersonalData, getPersonalData, personalDataSelectors } from "../../store/userPersonalData/slice";
import { useEffect } from "react";


export const Profile = (props) => {
    const dispatch = useDispatch()

    const {id} = useParams()
    const myId = useSelector(state => userAuthSelectors.getUserPersonalId(state)) 
    const isMyOwn = Number(id) === myId
    useEffect(() => {
        if(isMyOwn){
            dispatch(getPersonalData())
        }else{
             dispatch(getOtherPersonalData({id}))
        }
    }, [isMyOwn,id,dispatch])

    const userData = useSelector(state => personalDataSelectors.getPeronalDataSelector(state, isMyOwn))
    return (
        <div>
            {id}
            {userData?.email}
            {userData?.firstName}
            {userData?.lastName}
        </div>
    );
}
