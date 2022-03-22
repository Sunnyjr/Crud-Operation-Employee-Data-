import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Home';
import AddEmployee from './component/AddEmployee';
import UpdateEmployee from './component/UpdateEmployee';
import { BrowserRouter,  Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 style={{textAlign: 'center'}}> 👨‍💼Employee Data👨‍💼 </h1>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/component/add" component={AddEmployee} />
          <Route exact path="/component/update/:id" component={UpdateEmployee} />
        </Switch>
        
      </div>
    </BrowserRouter>

  );
}

export default App;


// steps 
// 1. install bootstrap
//2 create components and import it. singlepage app nanae k liye router use karna hay .=>
//3 install react-router-dom version@5.3.0 and import and use it. abb data bhi chiye to kese data lu or show karu .=>
//4 install json-server and create json file outside the src for store our data.
//5 get facke data and save it in db.json file and name it users . 
//6 now we have to run data so ek time pe ek hi script chala sakte hay so ek sath dono script ko start karnege kese =>
//in  package.json write "json-server":"json-server --watch data.json --port 3003", and run it .
//7 install concurrently and do thhis "go": "concurrently \"npm start\" \"npm run json-server\"",
//*8 in terminal  do "npm run go" then the actual app is run .
//component home---
// abb data ko kese lenge to uske liye state  declare karege or http methods k through data get karenge.=>
//9 install axios to get data in home page and use useState() hook to  declare empty array state .
//10  useEffect banate hay jaha hum data ko load karenge.
//11 create one fucntion jiske andar axios k through data get karenge and and update state k andar data lenge.
//12 abb data ko ui me show karana hay to table  create karenge and use map() to show each data in array.
//create button to add employee and search bar and link the button so onclick button the user jump to addemployee page .
// link update , delete button aswell.
//component AddEmployee----
//13  create a form first.
//14  then create object have keys, fname,lname,email and distructure it to use in form.
//15 in the form put values and name.
//16 for updating values we create fucntion and udate it by names . and use that function in form using onchnage event .
//17 for storing users values we call API by axios using async await function and put users in the end so we put values in .
//18 now //use await becouse data store k bad hi homepage dikhe otherwise pehale render ho jayenga homepage.
        //user me form se data leke bhej rahe hay isliye user put kiya .
        //now after getting data we stay on addemployee page so ,for go back to home page we use use history hook called redart.
        // Using the history instance you can redirect users to another page.
//**update Employee */----------



// How do you get data from useParams in react?
// Import { useParams } from 'react-router-dom'.
// log, useParams returns an object of the Route parameters. This means we can deconstruct the id with { id } = useParams()
// to grab the id of the path and use the id param to dynamically fetch data from the api.
