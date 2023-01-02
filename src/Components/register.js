import React from 'react';
// import "antd/dist/reset.css";
// import { Form, Input, Select, Button } from "antd";
import '../App.css';
import { useState } from 'react';
import { Navigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('male');
    const [plan, setPlan] = useState('$299');

    function handleSubmit(event){
        event.preventDefault();
        console.log(name, age, mail, password, gender, plan);
        let json = { 'name' : name, 'age' : age, 'mail' : mail, 'gender' : gender, 'plan' : plan }
        const postMethod = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        };
        fetch('https://f81692d487b8.in.ngrok.io/members/insert', postMethod)
            .then(response => console.log(response))
            .then(() => alert("Succesfully Enrolled!"))
        setAge(''); setGender('male'); setName(''); setMail(''); setPassword(''); setPlan('$299');
        
        return <Navigate to = "/display" />;    
    }

    return (
        <div class = "form">
            <form action = "">
                <label htmlFor = 'name'>Name</label>
                <input type = "text" value = { name } onChange = {(e) => setName(e.target.value)} placeholder = 'Enter your Name..'/>
                <label htmlFor = 'age'>Age</label>
                <input type = "text" value = { age } onChange = {(e) => setAge(e.target.value)} placeholder = 'Enter your Age..'/>
                <label htmlFor = 'mail'>Mail</label>
                <input type = "text" value = { mail } onChange = {(e) => setMail(e.target.value)} placeholder = 'Enter your Mail..'/>
                <label htmlFor = 'password' >Password</label>
                <input type = "password" value = { password } onChange = {(e) => setPassword(e.target.value)} placeholder = 'Enter your password..'/>
                <label htmlFor = 'gender'>Gender</label>
                <select id = "gender" name = "gender" value = {gender} onChange = {(e) => setGender(e.target.value)}>
                    <option value = "male" >Male</option>
                    <option value = "female" >Female</option>
                </select>
                <label htmlFor = 'plan'>Membership plan</label>
                <select id = "plan" name = "plan" value = {plan} onChange = {(e) => setPlan(e.target.value)}>
                    <option value = "$299">$299</option>
                    <option value = "$499">$499</option>
                    <option value = "$999">$999</option>
                </select>
                <input type="submit" value="Enroll" onClick = { handleSubmit }/>
            </form>
        </div>
        
    );
}

export default Register;