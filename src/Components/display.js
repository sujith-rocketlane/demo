import React, { useState, useEffect, Fragment } from 'react';
import '../App.css';

function Display(){
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://f81692d487b8.in.ngrok.io/members/show")
        .then((data) => data.json())
        .then((data) => {
        setData(data);
        setLoaded(true);
        console.log(data);
        console.log(data[0].age, data[0].plan, data[0].gender);
    })
    }, [])

    if(!loaded){
        return (
            <div className = 'loadMsg'>
                <h1>Loading... please wait</h1>
            </div>
        );
    }
    else{
        return (
            <Fragment>
                <h1 className = "heading">Enrolled Members</h1>
                <div style = {{ margin : '50px' }}>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Mail</td>
                                <td>Gender</td>
                                <td>Membership</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.length > 0 ?
                                data.map((user) => {
                                    return( 
                                        <tr key = {user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.mail}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.plan}</td>
                                        </tr>
                                    )     
                                })
                                : "No data available"
                            }
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }

}

export default Display;