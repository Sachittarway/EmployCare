import {Link} from 'react-router-dom';
import React, { useState} from 'react';
import "./Landing.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Landing () {
    const [values,setValues] = useState({
        id: "",
        sugar:"",
        bp:"",
        sugars:"",
        bps:"",
        sugarss:"",
        bpss:""
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
        const { id, sugar, bp, sugars, bps, sugarss, bpss } = values;
        if (id === "") {
            toast.error("Employee Id is required.", toastOptions);
            return false;
        } else if (sugar === "") {
            toast.error("Sugar level is required", toastOptions);
            return false;
        } else if (bp==""){
            toast.error("Blood pressure level is required", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(validateForm()) {
          const { data } = await axios.post('http://localhost:1235/adddetails',values);
          if(data.status === false) {
            toast.error(data.msg, toastOptions);
          }
          else if(data.status === true) {
            console.log(data.status);
            toast.success("Details added", toastOptions);
            console.log("Toast success called");
          }
        }
    }

    return(
        
        <>
        <div className='prescriptionFolder'>
            <div className='navbar-start'>
                <div className="wrapper">
                    <div className="sidebar">
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

            <div className="add-details-form">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="add-details-employeeid">
                        <h3>Employee Id: </h3> <input className="input_fields"
                            type="number"
                            name="id"
                            onChange={(e) => handleChanged(e)}
                            min="3"
                        />
                    </div>
                    <br />
                    <div className='add-details-line'>
                        <h2>Enter your health details for 2021</h2>
                    </div>
                    <br />
                    <div className="add-details-data">
                        <h3>Sugar: </h3> <input className="input_fields"
                            type="number"
                            name="sugar"
                            onChange={(e) => handleChanged(e)}
                            min="3"
                        />
                    </div>
                    <div className="add-details-data">
                        <h3>Blood Pressure: </h3> <input className="input_fields"
                            type="number"
                            name="bp"
                            onChange={(e) => handleChanged(e)}
                            min="3"
                        />
                    </div>
                    <br />
                    <div className='add-details-line'>
                        <h2>Enter your health details for 2022</h2>
                    </div>
                    <br />
                    <div className="add-details-data">
                        <h3>Sugar: </h3> <input className="input_fields"
                            type="number"
                            name="sugars"
                            onChange={(e) => handleChanged(e)}
                            min="3"
                        />
                    </div>
                    <div className="add-details-data">
                        <h3>Blood Pressure: </h3> <input className="input_fields"
                            type="number"
                            name="bps"
                            onChange={(e) => handleChanged(e)}
                            min="3"
                        />
                    </div>
                    <br />
                    <div className='add-details-line'>
                        <h2>Enter your health details for 2023</h2>
                    </div>
                    <br />
                    <div className="add-details-data">
                        <h3>Sugar: </h3> <input className="input_fields"
                            type="number"
                            name="sugarss"
                            onChange={(e) => handleChanged(e)}
                            min="3"
                        />
                    </div>
                    <div className="add-details-data">
                        <h3>Blood Pressure: </h3> <input className="input_fields"
                            type="number"
                            name="bpss"
                            onChange={(e) => handleChanged(e)}
                            min="3"
                        />
                    </div>
                    <button className="landing-submit" type="submit">Add Details</button>
                </form>
            </div>
            <ToastContainer />
        </div>
        
        </>
    )
} 