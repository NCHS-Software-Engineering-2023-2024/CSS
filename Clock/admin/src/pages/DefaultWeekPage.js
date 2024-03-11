import React, { useState, useEffect } from "react";

import ScheduleDropdown from "../components/ScheduleDropdown";

import "../styles/App.css";
import Box from '@mui/material/Box';

function DefaultWeekPage() 
{
    const [defaultWeek, setDefaultWeek] = useState({}); // the current default-week (initially recieved from the server)
  
    const baseURL = "http://localhost:8500/"; // This will likely need to be changed for a production build


    // TODO: and authorization header can be used to make sure that this user has admin credentials
    function updateServerDefaultWeek(info) // Sends the schedules to the server 
    {
        fetch(`${baseURL}defaultWeek`,
        {
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        });
    }


    // gets defaultWeek JSON object from server
    useEffect(() => {
        fetch(`${baseURL}defaultWeek`)
        .then((res) => res.json())
        .then((data) => {setDefaultWeek(data);}
        );
    }, []);
  
    // replaces the schedule of a certain day ([0, 1, 2, 3, 4, 5, 6] --> (Sunday, Monday, Tuesday, etc))
    function setDay(day, schedule)
    {
        const copiedDefaultWeek = {...defaultWeek};
        copiedDefaultWeek[day] = schedule;
        setDefaultWeek(copiedDefaultWeek);
    }
    // update the server and notify the user that the server has been updated
    function submitDefaultWeek()
    {
        updateServerDefaultWeek(defaultWeek);
        window.alert("Default Week Updated");
    }


    return(
        <Box className='Box'>
        <div className="Content">
            <header className="App-header">
                <h1>Default Week</h1>
            </header>

            <div className="List">
                <table className="Table">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Schedule Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>
                                <ScheduleDropdown defaultValue={defaultWeek[1]} callback={(res)=>{setDay(1, res)}} />
                            </td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>
                                <ScheduleDropdown defaultValue={defaultWeek[2]} callback={(res)=>{setDay(2, res)}} />
                            </td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>
                                <ScheduleDropdown defaultValue={defaultWeek[3]} callback={(res)=>{setDay(3, res)}} />
                            </td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>
                                <ScheduleDropdown defaultValue={defaultWeek[4]} callback={(res)=>{setDay(4, res)}} />
                            </td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>
                                <ScheduleDropdown defaultValue={defaultWeek[5]} callback={(res)=>{setDay(5, res)}} />
                            </td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>
                                <ScheduleDropdown defaultValue={defaultWeek[6]} callback={(res)=>{setDay(6, res)}} />
                            </td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>
                                <ScheduleDropdown defaultValue={defaultWeek[0]} callback={(res)=>{setDay(0, res)}} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="List">
                <button className="button" onClick={submitDefaultWeek}>Submit form</button>
            </div>
        </div>
        </Box>
    );
}

export default DefaultWeekPage;