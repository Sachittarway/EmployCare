import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import "./Search.css"
export default function Search () {

    const [values,setValues] = useState({
        id: ""
    });

    const [pres, setPres] = useState([]);

    const handleChanged = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleResultsClick = () => {
        // Call an API to fetch the result based on the ID
        fetch(`http://localhost:1235/getdetailss/${values.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('API response:', data);
          if (data.status) {
            setPres(data.pres);
          } else {
            setPres([]);
          }
        })
        .catch((error) => console.error(error));
    };

    return(
        <>
            <div className='prescriptionFoldersss'>
                <div className='navbar-startsss'>
                    <div className="wrappersss">
                        <div className="sidebarsss">
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
            <div className="AllPatientsStart">
                <div className="search">
                    <input className="emp_id"
                        type="text"
                        placeholder='Employee Id'
                        name="id"
                        onChange={(e) => handleChanged(e)}
                    />
                </div>
                <button className="submit-search" onClick={handleResultsClick}>Search</button>
            </div>
            {pres.length > 0 ? (
            <div className='searchresult'>
                {pres.map((prescription) => (
                    <div key={prescription.id} className="prescription-item">
                        <h2>Employee Id:{prescription.id}</h2>
                        <br />
                        <h3>Health details of 2021</h3>
                        <div>Sugar:{prescription.sugar}</div>
                        <div>Sugar Result:{prescription.notesugar}</div>
                        <br />
                        <div>Blood Pressure:{prescription.bp}</div>
                        <div>BP Result:{prescription.notebp}</div>
                        <br />
                        <br />
                        <h3>Health details of 2022</h3>
                        <div>Sugar:{prescription.sugars}</div>
                        <div>Sugar Result:{prescription.notesugars}</div>
                        <br />
                        <br />
                        <div>Blood Pressure:{prescription.bps}</div>
                        <div>BP Result:{prescription.notebps}</div>
                        <br />
                        <br />
                        <h3>Health details of 2023</h3>
                        <div>Sugar:{prescription.sugarss}</div>
                        <div>Sugar Result:{prescription.notesugarss}</div>
                        <br />
                        <div>Blood Pressure:{prescription.bpss}</div>
                        <div>BP Result:{prescription.notebpss}</div>
                    </div>
                ))}
            </div>
      ) : (
        <div className='ifnot'>No prescription found.</div>
      )}
        
        </>
    )
}