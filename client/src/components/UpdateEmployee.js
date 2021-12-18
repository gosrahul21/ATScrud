import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import moment from 'moment'
export default function EmployeeForm() {

    const [formData,setFormData] = useState({});
    const {id} = useParams();

    //just like previos version of history
    
    const navigate = useNavigate();
    useEffect(()=>{
        
        axios.get(`${process.env.API_PATH}/${id}`).then(({data})=>{
            setFormData(data);
            console.log(data)
        });
    },[id]);


    const updateEmployee = ()=>{
        axios.put(`${process.env.API_PATH}/${id}`,formData).then(({data})=>{
            console.log(data)
            navigate('/')
        }).catch((err)=>{
            console.log(err.data)
        })
    }

    return (
        <div className='flex flex-col space-y-2 items-center py-4' >
            <h1 className="text-lg font-bold text-gray-600">Update {formData.emp_name?.split(' ')[0]} Details </h1>
            <input type="text" value={formData.emp_name} required className="rounded-md w-80 border-2 px-4 py-1 " onChange={(e)=>setFormData({...formData,emp_name:e.target.value})} placeholder='Name'/>
            <input type="date" value={formData.dob? moment(formData.dob).format('YYYY-MM-DD'):null} required className="rounded-md w-80 border-2 px-4 py-1" onChange={(e)=>setFormData({...formData,dob:e.target.value})} placeholder='Date of Birth'/>
            <input type="text" value={formData.emp_designation} required className="rounded-md w-80 border-2 px-4 py-1"  onChange={(e)=>setFormData({...formData,emp_designation:e.target.value})} placeholder='Designation'/>
            <input type="text" value={formData.salary} required className="rounded-md w-80 border-2 px-4 py-1" onChange={(e)=>setFormData({...formData,salary:e.target.value})} placeholder='Salary'/>
            <button onClick={updateEmployee} className='rounded-md bg-orange-500 px-4 py-1 w-80 transform transition duration-700 active:scale-95'  type="submit">Submit</button>
        </div>
    )
}


// className="d-flex flex-column justify-content-center align-items-center"