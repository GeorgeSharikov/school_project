export const getPeronalDataSelector = (state, isOwn = true) => {
    if(isOwn){
        return state.personalData.personalData
    }
    return state.personalData.otherAccountData
}