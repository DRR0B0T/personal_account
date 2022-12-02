import React, {useState} from 'react';
import './List.scss'
import {Users} from "../../components/Users";
import axios from "axios";

const List:React.FC = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = React.useState<[]>([])

    React.useEffect(()=>{
        try {
            setIsLoading(true)
            axios.get('https://reqres.in/api/users').then(response =>setUsers(response.data))
            console.log(users)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    },[])

    return (
        <div className='container'>
            <Users isLoading={isLoading} users={users}/>
        </div>
    );
};

export default List;
