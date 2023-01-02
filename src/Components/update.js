import React, { useState, useEffect } from 'react';



function Update(){
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [newPlan, setNewPlan] = useState('$299');
    useEffect(() => {
        fetch("https://f81692d487b8.in.ngrok.io/members/show")
        .then((data) => data.json())
        .then((data) => {
        setData(data);
        setLoaded(true);
        console.log(data);
    })
    }, [])

    function updateMember(event){
        event.preventDefault();
        data.map((user) => {
            console.log(user, name, user.id); 
            let json = {'name' : name, 'plan' : newPlan}
            console.log(newPlan, name);
            if(user.name == name){
                const postMethod = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(json)
                };
                fetch('https://f81692d487b8.in.ngrok.io/members/update/' + user.id + "?plan=" + newPlan, postMethod)
                    .then(response => console.log(response))
                    .then(() => alert("Succesfully Updated!"))
                return 0;
            }
        })
    }

    if(!loaded){
        return (
            <div className = 'loadMsg'>
                <h1>Loading... please wait</h1>
            </div>
        );
    }
    else{
        return (
            <div>
                <h1 className = 'heading'> Update Membership</h1>
                <div class = "form">
                <form action = "">
                    <label htmlFor = 'name'>Name</label>
                    <input type = "text" value = { name } onChange = {(e) => setName(e.target.value)} placeholder = 'Enter the member name to update..'/>
                    <label htmlFor = 'plan'>Membership plan</label>
                    <select id = "plan" name = "plan" value = { newPlan } onChange = {(e) => setNewPlan(e.target.value)}>
                        <option value = "$299">$299</option>
                        <option value = "$499">$499</option>
                        <option value = "$999">$999</option>
                    </select>
                    <input type="submit" value="Enroll" onClick = { updateMember }/>
                </form>
            </div>

            </div>
        );
    }
}
export default Update