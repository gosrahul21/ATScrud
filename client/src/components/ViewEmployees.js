import React,{useEffect,useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function ViewEmployees() {

    const [employees,setEmployees] = useState([]);
    const navigate = useNavigate();

    function getEmployees (){
        axios.get('http://localhost:8000/employee')
        .then((res)=>setEmployees(res.data)).catch((err)=>{
            //error
        })
    }

    useEffect(()=>{
        // request for employess
        getEmployees();
    },[])

    const deleteItem = (id)=>{
        axios.delete(`http://localhost:8000/employee/${id}`).then(()=>{
            getEmployees();
        }).catch((err)=>{
            //error
        })
    }

    const renderList = ()=>{

        return employees.map(({_id,emp_name,dob,salary,emp_designation},id)=>(
            <tr className={`px-1 sm:px-2 md:px-4 ${id%2!=0?'bg-gray-100':'bg-white'}`} key={id}>
            <td className='p-1 md:p-2' >{id+1}  </td>
            <td className='p-1 md:p-2' > {emp_name} </td>
            <td className='p-1 md:p-2' > {new Date(dob).toLocaleDateString()}</td>
            <td className='p-1 md:p-2' > {emp_designation}</td>
            <td className='p-1 md:p-2' > {salary} </td>
            <td className="p-1 md:p-2" >
                <DeleteIcon 
                    className='active:text-yellow-600  text-red-500 cursor-pointer' 
                    onClick={()=>deleteItem(_id)}/> / <EditIcon onClick={()=>navigate(`/edit/${_id}`)} className="text-green-600 active:text-yellow-600 cursor-pointer"/> </td>
        </tr>
        ))
    }


    return (
        <div className='flex overflow-x-auto overflow-y-auto sm:justify-center' >
            {employees.length?<table className='  shadow-md text-xs sm:text-sm md:text-base rounded-md mt-4 whitespace-nowrap'>
                <tr className='px-1 sm:px-2 md:px-4 rounded-md bg-blue-500 text-white'>
                    <th className="p-1 md:p-2" > emp_id </th>
                    <th className="p-1 md:p-2" >  emp_name </th>
                    <th className="p-1 md:p-2"  > DOB </th>
                    <th className="p-1 md:p-2"  > Designation </th>
                    <th className="p-1 md:p-2"  > Salary </th>
                    <th className="p-1 md:p-2"  >Options</th>
                </tr>
                {/* list of employees */}
                {renderList()}
                

            </table>:<h1 className='text-xl font-bold'>No Records Available</h1>}
        </div>
    )
}
