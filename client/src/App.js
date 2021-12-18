import React,{useState} from 'react'
import Header from './components/Header'
import EmployeeForm from './components/EmployeeForm'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ViewEmployees from './components/ViewEmployees'
import UpdateEmployee  from './components/UpdateEmployee'

function App() {
    return (
        <div> 
           
            <BrowserRouter>
                <Header/>
                    
                    <Routes>
                        <Route exact path="/" element={<ViewEmployees/>}></Route>
                        <Route exact path="/add" element={<EmployeeForm/>}></Route>
                        <Route exact path="/edit/:id" element={<UpdateEmployee/>}/>
                    </Routes>
              
                {/* <Route exact path='/'><ViewEmployees/></Route> */}
            </BrowserRouter>
                
        </div>
    )
}

export default App
