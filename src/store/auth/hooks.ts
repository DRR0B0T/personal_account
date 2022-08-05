import { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import {startLoading, stopLoading, login, auth} from './slice'

type User = {
    id?: number;
    token?: string;
}

export const saveUserDataToLocalStore = ({id, token}:User) => {
    localStorage.setItem('userData', JSON.stringify({
        userId: id,
        token: token
    }))
}

export const useAuth = () =>{
    const isLoading = useSelector((state:{auth:{isLoading:boolean}}) => state.auth.isLoading)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(startLoading())
        const data = JSON.parse((localStorage.getItem('userData')) || '')
        if(data){
            dispatch(login({token:  data.token, id: data.userId}))
        }
        dispatch(stopLoading())
    },[dispatch])

    return isLoading
}