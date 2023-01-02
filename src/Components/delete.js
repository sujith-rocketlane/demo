import React, { useEffect, useState } from 'react';

function Delete(){
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    useEffect(() => {
        fetch("https://f81692d487b8.in.ngrok.io/members/show")
        .then((data) => data.json())
        .then((data) => {
        setData(data);
        setLoaded(true);
        console.log(data);
    })
    }, [])

    function deleteMember(event){
        event.preventDefault();
        data.map((user) => {
            console.log(user, name, user.id);
            if(user.name == name){
                fetch('https://f81692d487b8.in.ngrok.io/members/delete/' + user.id, { method: 'DELETE' })
                .then(() => alert("Unenrolled Successfully"));
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
                <h1 className = 'heading'> UnEnroll</h1>
                <div class = "form">
                    <form action = "">
                        <label htmlFor = 'name'>Name</label>
                        <input type = "text" value = { name } onChange = {(e) => setName(e.target.value)} placeholder = 'Enter the member name to delete..'/>
                        <input type = "submit" value = "UnEnroll" onClick = { deleteMember }/>
                    </form>
                </div>
            </div>
        );
    }
}
export default Delete