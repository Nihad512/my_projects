import {useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth,sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'
import {ReactComponent as ArrorRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
function ForgotPassword() {
    const [email,setEmail]=useState('')
    const onChange= async (e)=>{
    setEmail(e.target.value)
    }
    const onSubmit = async (e)=>{
        e.preventDefault()
        try {
            const auth=getAuth()
            await sendPasswordResetEmail(auth,email)
            toast.success('ae gonderdim')
        } catch (error) {
            console.log(error);
            toast.error('could not sent')
        }
    }
    return(
        <div className='pageContainer'>
            <header>
                <p className="pageHeader">Forgot Password</p>
            </header>
            <main>
                <form onSubmit={onSubmit}>
                    <input 
                    type="email" 
                    className="emailInput"
                    placeholder='Email' 
                    id='email'
                    value={email}
                    onChange={onChange}
                    />
                    <Link className='forgotPasswordLink' to='/sign-in'>Sign In</Link>
                    <div className="singInBar">
                        <div className="signInText">send reset Link</div>
                        <button className="signInButton">
                            <ArrorRightIcon fill='#fff' width='34px' height='34px'/>
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}
export default ForgotPassword






