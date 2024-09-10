import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login(){
 
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [logError, setLogError] = useState(false)
  const navigate = useNavigate();

  function toDash(){
    const storedUserInfo = localStorage.getItem('userInfo')
    const parsedUserInfo = JSON.parse(storedUserInfo)

    if(parsedUserInfo.name === username && parsedUserInfo.passcode === password){
      navigate('/dashboard')
    }
    else{
      setLogError(true)
    }
    
  }

  return(<>

    <div className="head">
      <div  className="login">
        <Link to="/">
          <h1 className="text-xl mb-10 font-bold text-gray-700"><a href="#">CHRIS</a></h1>
        </Link>
        
        <div className="text-center text-2xl mb-7 text-white log">
          <h2>LOG IN</h2>
        </div>

        <div className="text-center text-lg mb-3 text-red-600 warning">
          <p  style={{display: logError ? 'block' : 'none'}} value={logError}>- Invalid password or wrong username</p>
        </div>

        <div className="box mb-8">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="box mb-8">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="mt-10">
          Remember me
        </div>

       
        <div className="logBtn mt-3">
          <button onClick={toDash}>Login</button>
        </div>
      

        <div className="flex justify-around align-center mt-16">
          <p>Forgot Password</p>
          <Link to="/register">
            <p><a href="#" className="text-red-300 text-lg">Register</a></p>
          </Link>
          
        </div>
        

      </div>
    </div>
  
  </>)
}

export default Login