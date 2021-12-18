import React,{useEffect,useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom';

export default function DropDown() {
    const [show,setShow] = useState(false);
    const navigate = useNavigate();
    const listener = ()=>{
        setShow(false)
    }
    useEffect(()=>{
        window.addEventListener('click',listener)

        return ()=>window.removeEventListener('click',listener)
    },[])
    return (
        <div className='relative border-2 rounded-md border-gray-300 md:hidden'>
            <MenuIcon onClick = {(e)=>{e.stopPropagation(); setShow(!show);}} className="cursor-pointer text-gray-600"/>
            {show&&<div className="absolute right-0 shadow-md bg-white whitespace-nowrap">
                <p className='px-4 py-2 cursor-pointer hover:bg-gray-50' onClick={()=>navigate('/add')}>Add Employee</p>
                <p className='px-4 py-2 cursor-pointer hover:bg-gray-50' onClick={()=>navigate('/')}>View Employees</p>
            </div>}
        </div>
    )
}
