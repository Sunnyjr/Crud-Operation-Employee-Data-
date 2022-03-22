import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddEmployee() {

    let history = useHistory();
    const [user, setUser] = useState({ //create object
        firstname: '',
        lastname: '',
        email: '',

    })
    const { firstname, lastname, email } = user; //we have to destructure the object and use it ,other wise it show undifine.

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value }); //update values and e.target.name also change that we have give in form.
    }

    const onSubmitform = async (e) => {
        e.preventDefault();
        //now for adding data we call post method 
        await axios.post("http://localhost:3003/users", user);
        history.push("/");  //home page ko push kar rahe hay

        //use await becouse data store k bad hi homepage dikhe otherwise pehale render ho jayenga homepage.
        //user me form se data leke bhej rahe hay isliye user put kiya .
        //now after getting data we stay on addemployee page so ,for go back to home page we use use history hook called redart.
        // Using the history instance you can redirect users to another page.

    }

    return (
        <div>

            <div className="container border shadow p-5 w-50">
                <h2 style={{ textAlign: 'center' }}>Add Employee</h2>
                <form onSubmit={e => onSubmitform(e)}>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Firstname</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputName"
                            name="firstname"
                            value={firstname}
                            onChange={e => onInputChange(e)}
                            required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Lastname</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputName"
                            name="lastname"
                            value={lastname}
                            onChange={e => onInputChange(e)}
                            required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                            required />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <button type="submit" class="btn btn-primary " style={{ width: "200px" }}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddEmployee;