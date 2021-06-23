import { useState } from "react";
import Button from "../components/Button/Button"
import TextBox from "../components/TextBox/TextBox"
import nookies, { setCookie } from 'nookies';
import router from 'next/router';


const Login = () => {
    const [user, SetUser] = useState<string>(null);
    const [error, setErrorMessage] = useState<string>("");

    const userCheck = (e) => { SetUser(e.target.value) };

    const loginHandler = async(e) => {

        if (!user) {
            alert("Please enter emp id");
            setErrorMessage("Please input valid emp id");
            return
        }
        alert("Welcome to hack ideas");
        //save username to cookie
        setCookie(null, 'username', user, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        });

        router.push('/');

    }
    return (<div className='bg-grey-600 h-screen w-screen' >
       
        <div className='flex items-center flex-col pt-60'>
            <div className="text-black-600 text-2xl text-center px-8">HACK IDEAS LOGIN .<br/> Please enter your emp id!</div>
            <TextBox placeholder="EMP1001" changeHandler={userCheck} />
            <Button blabel="Enter arena!" clickHandler={loginHandler}></Button>
            <div className="text-xl">{ error}</div>
            </div>
        </div>)

}



export const getServerSideProps = async(ctx) => {
    
    const cookies = nookies.get(ctx);
    if (cookies.username) {
        return {
            redirect: {
              permanent: false,
              destination: '/home'
            }
        }
       

    }
    return {
        props: {}
    }



}




export default Login;