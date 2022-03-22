import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Home = () => {
    const [users, setUsers] = useState([]); //declare object/state with empty array(initial value)
    const [searchEmploy, setSearchEmploy] = useState(''); 


    // data ko show karna hay jab page(component) load  lera hoota hay initially ,to use karenege useEffect.
    useEffect(() => {
        console.log("when the page load the data will show here.")
        loadUsers();  //load data;
    }, [])            //put empty array(dependancy) so the data will not render multiple times only run ones.
    

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users"); 
        // console.log(result); //return a promiss and data.
        setUsers(result.data.reverse()); // reverse() use to show new data on top.
        console.log(result.data); //all users data.

    }

    const deleteEmploy = async(id) => {
        if(window.confirm("Are you sure you want to delete?")){
            await axios.delete(`http://localhost:3003/users/${id}`); 
            loadUsers();
        }
    }

    return (
        <div className="HomePage">
            
            <div className="table-responsive m-5">

                <div style={{marginLeft:"400px"}} >
                    <input type="text" 
                     placeholder="✍️ Search...." 
                     className="search me-2"
                     value={searchEmploy}
                     onChange={(e) => setSearchEmploy(e.target.value)} />

                    <Link to="/component/add" type="button" class="btn btn-info btn-lg">Add Employee </Link>
                </div> 

                <table className="table border shadow table align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>


                    {users.filter((item) => {

                        if(item.firstname === ''){
                            return true
                        }else {
                            return item.firstname.toLowerCase().includes(searchEmploy.toLowerCase()) || item.lastname.toLowerCase().includes(searchEmploy.toLowerCase())
                        }
                    })               
                    
                    
                    .map((ele, index) => {

                        return (<>
                            <tbody>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{ele.firstname}</td>
                                    <td>{ele.lastname}</td>
                                    <td>{ele.email}</td>
                                    <td>
                                        <Link to={`/component/update/${ele.id}`} type="button" class="btn btn-danger me-2">Update</Link>
                                        <Link type="button" class="btn btn-warning " onClick={() => deleteEmploy(ele.id)} >Delete</Link> 
                                    </td>
                                </tr>
                            </tbody>
                        </>
                        )
                    })
                    }


                </table>
            </div>
        </div>
    );
}

export default Home;

