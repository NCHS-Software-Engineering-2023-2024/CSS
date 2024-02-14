import "../styles/App.css";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { Button } from '@mui/material';

function LoginPage() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo" src={logo} alt="logo" />
          <h1>Login</h1>
        </header>
        <body className="App-menu">
          <div>
            <form id="login">
                <label  for="username">Username: </label>
                <input  type="text" id="username" name="username"></input>
                <br /><br />
                <label for="passwd">Password: </label>
                <input type="text" id="passwd" name="passwd"></input>
                <br /><br />
            </form>
            <br /><br />
            <Link to="/preview">
              <Button className="Button" color='primary' variant="contained">Continue</Button> {/* No Real Functionality Yet */}
            </Link>
          </div>
        </body>
      </div>
    );
  }
  
  export default LoginPage;