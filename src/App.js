
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import Shop from './pages/Shop/Shop/Shop';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Order from './pages/Order/Order';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import Review from './pages/Dashboard/Review/Review';
import CreateAdmin from './pages/Dashboard/CreateAdmin/CreateAdmin';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import ManageOrder from './pages/ManageOrder/ManageOrder';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import Footer from './pages/Shared/Navigation/Footer/Footer';
import Pay from './pages/Dashboard/Pay/Pay';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/home">
           <Home></Home>
         </Route>
         <Route exact path="/shop">
           <Shop></Shop>
         </Route>
         <PrivateRoute exact path="/dashboard">
           <Dashboard></Dashboard>
         </PrivateRoute>
         <PrivateRoute exact path="/pay">
           <Pay></Pay>
         </PrivateRoute>
         <PrivateRoute exact path="/myorder">
           <MyOrder></MyOrder>
         </PrivateRoute>
         <PrivateRoute exact path="/review">
           <Review></Review>
         </PrivateRoute>
         <PrivateRoute exact path="/create-admin">
           <CreateAdmin></CreateAdmin>
         </PrivateRoute>
         <PrivateRoute exact path="/add-product">
           <AddProduct></AddProduct>
         </PrivateRoute>
         <PrivateRoute exact path="/manage-order">
           <ManageOrder></ManageOrder>
         </PrivateRoute>
         <PrivateRoute exact path="/manage-products">
           <ManageProducts></ManageProducts>
         </PrivateRoute>
         <PrivateRoute exact path="/order/:productId">
           <Order></Order>
         </PrivateRoute>
         <Route exact path="/login">
           <Login></Login>
         </Route>
         <Route exact path="/register">
          <Register></Register>
         </Route>
       </Switch>
       
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
