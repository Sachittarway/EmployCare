import {Link} from 'react-router-dom';
import "./AddEmployee.css"
import React, { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function AddEmployee () {
    
    const [values,setValues] = useState({
      id: "",
      name:""
    });
    console.log(values);


    const handleChanged = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    };


    const validateForm = () => {
        const { id, name } = values;
        if (id === "") {
            toast.error("Employee Id is required.", toastOptions);
            return false;
        } else if (name === "") {
            toast.error("Employee Name is required", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(validateForm()) {
          const { data } = await axios.post('http://localhost:1235/add',values);
          if(data.status === false) {
            toast.error(data.msg, toastOptions);
          }
          else if(data.status === true) {
            console.log(data.status);
            toast.success("Employee added", toastOptions);
            console.log("Toast success called");
          }
        }
    }

    return(
        <>
            <div className='prescriptionFolders'>
                <div className='navbar-starts'>
                    <div className="wrappers">
                        <div className="sidebars">
                            <h2>Hospinet</h2>
                            <ul>
                                <li><Link to="/">Add Details</Link></li>
                                <li><Link to="/search">Search</Link></li>
                                <li><a href="/allemployees">All Employees</a></li>
                                <li><Link to="/addemployee">Add Employee</Link></li>
                         </ul> 
                        </div>
                    </div>
                </div>
            </div>

            <div className='add-employee-details'>
                <form onSubmit={(event) => handleSubmit(event)}>
                <div className="add-employee-employeeid">
                        <h3>Employee Id: </h3> <input className="input_fieldss"
                            type="number"
                            name="id"
                            onChange={(e) => handleChanged(e)}
                            min="3"
                        />
                </div>
                <div className="add-employee-name">
                        <h3>Employee Name: </h3> <input className="input_fieldss"
                            type="text"
                            name="name"
                            onChange={(e) => handleChanged(e)}
                            min="3"
                        />
                </div>
                <button className="add-employee-submit" type="submit">Add Employee</button>
                </form>
                <ToastContainer />
            </div>
            
        </>
    )
}