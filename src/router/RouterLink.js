import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
const RouterLink = () =>{

    return(
        <div>
<BrowserRouter>

<Switch>  
<Route exact path="/home">
<Home/>
</Route>

    <Route exact path="/" >
        <Login/>
    </Route>


</Switch>

</BrowserRouter>

        </div>
    );
}


export default RouterLink;