// import react from 'react'
import './auth.css'
import {BiUpload} from 'react-icons/bi'
// import Login from './Login'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'



function Register(){
    const  handleRegister = async(e) => {
     e.preventDefault()
     const formData = new FormData(e.target)

     const {username, email, password} = Object.fromEntries(formData)
     console.log({username, email, password})
     try{
        const res = await createUserWithEmailAndPassword(auth,email,password)
        console.log(res)
        toast.success('Registered Sucessfully')

        await setDoc(doc(db, 'users', res.user.uid), {
            username,
            email,
            id: res.user.uid,
            blocked: [],
        })
     }
     catch(err){
console.log(err)
toast.error(err.message)
     }
    }
    return(
    <div className='container'>
        
        <form action="" className="form" onSubmit={handleRegister}>
        <h1 className='reg'> Register Here</h1>
                  <label htmlFor="file">
                    <img src={'./img3.jpg'} alt="" />
                      <BiUpload size={33} className='upload'/>
                </label>   
                <input type="file" id='file' style={{display:"none"}}/>           
                <input type="text" placeholder='Username' name='username'  />
                <input type="text" placeholder='Email' name='email' />
                <input type="password" placeholder='Password' name='password' />
                {/* <input type="file" id='file' name='username'/> */}
                <button className='btn'>Sign Up</button>
                <hr />
                <p>Already have an account? <a href="#">Login</a></p>
            </form>
    </div>
        
    )
}
export default Register