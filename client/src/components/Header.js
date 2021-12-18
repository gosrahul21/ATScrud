import React from 'react'
import {useNavigate} from 'react-router-dom'

import DropDown from './DropDown';

// className="border-bottom  d-flex justify-content-end align-items-center py-2"
export default function Header() {

    const navigate = useNavigate();
    return (
        <div className='flex flex-row shadow-md align-center py-4 px-2 justify-end space-x-4' >
            {/* add employee */}
            <p className='hidden md:inline cursor-pointer active:text-blue-600' onClick={()=>navigate('/add')}>Add Employee</p>
            <p className='hidden md:inline cursor-pointer active:text-blue-600' onClick={()=>navigate('/')}>View Employees</p>
            <DropDown/>
        </div>
    )
}
