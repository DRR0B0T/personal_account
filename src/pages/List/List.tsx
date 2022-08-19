import React from 'react';
import './List.scss'
import {Users} from "../../components/Users";

const List:React.FC = () => {
    return (
        <div className='container'>
            <Users/>
        </div>
    );
};

export default List;
