import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateEmployee = () => {

    let history = useHistory();
    let { id } = useParams(); //destructure  //to grab the id of the path and use the id param to dynamically fetch data from the api

    const [user, setUser] = useState({ //create object
        firstname: '',
        lastname: '',
        email: '',

    })
    const { firstname, lastname, email } = user; //we have to destructure the object and use it ,other wise it show undifine.

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value }); //update values and e.target.name also change that we have give in form.
    }

    useEffect(() => {
        loadUsers();
    }, []);

    const onSubmitform = async (e) => {
        e.preventDefault();
        //now for adding data we call post method 
        await axios.put(`http://localhost:3003/users/${id} `, user);  //PUT method is call when you have to modify a single resource, which is already a part of resource collection.
        history.push("/");  //home page ko push kar rahe hay
    }

    const loadUsers = async () => {
        let result = await axios.get(`http://localhost:3003/users/${id} `)
        setUser(result.data);

    }

    return (
        <div>

            <div className="container border shadow p-5 w-50">
                <h2 style={{ textAlign: 'center' }}>Update Employee</h2>
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

                    <button type="submit" class="btn btn-dark " style={{ width: "200px" }}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateEmployee;