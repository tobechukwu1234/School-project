import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Register(){
  const [object, setObject] = useState({name: '', passcode: '', firsname: '', lasname: ''})
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [passError, setPassError] = useState(false)

  async function mainError(){

    if(password === '' || username === '' || firstname === '' || lastname === '' || email === '' || confirmPassword === ''){
      setError(true)
      return
    }
    setError(false)
   
    if(password !== confirmPassword){
      setPassError(true)
      return
    }
    setPassError(false)

    try{
      await createStudent()
      navigate('/login')
    }
    catch(error){
      console.log(error)
    }
      
  }

 

  function createStudent(){
    const newObject = {name: username, passcode: password, firsname: firstname, lasname: lastname}
    setObject(newObject)

    localStorage.setItem('userInfo', JSON.stringify(newObject))
   
    console.log(newObject)
  }

  return(<>

    <div className="head">
      <div className="register">
        <Link to="/">
          <h1 className="text-xl mb-7 font-bold text-gray-700"><a href="#">CHRIS</a></h1>
        </Link>

        <div className="text-center text-3xl mb-7 text-white log">
          <h2>Register</h2>
        </div>

        <div className="text-center text-lg mb-3 text-red-600 warning">
          <p  style={{display: error ? 'block' : 'none'}} value={error}>- Fill all input boxes</p>
          <p  style={{display: passError ? 'block' : 'none'}} value={passError}>- Password and Confirm Password must be same</p>
        </div>


        <div className="box mb-8">
          <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
        </div>
        <div className="box mb-8">
          <input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>

        </div>
        <div className="box mb-8">
          <input type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>

        </div>
        <div className="box mb-8">
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="box mb-8">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="box mb-8">
          <input type="password" placeholder="Confirm Password"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

        </div>

        <div className="logBtn mt-10">
          <button onClick={mainError}>Register</button>
        </div>

        <div className="flex justify-around align-center mt-10">
          <p>Have an account</p>
          <Link to="/login">
            <p><a href="#" className="text-red-200 text-lg">Log in</a></p>
          </Link>
          
        </div>

      </div>
    </div>
  </>)
}

export default Register