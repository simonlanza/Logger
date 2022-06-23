import React, {useState} from 'react';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

const Login = ({ setIsLogged }) => {
    const handleView = (arg) => {
        if(arg === 1){
            setView(<SignIn handleView={handleView} setIsLogged={setIsLogged} />);
        } else if (arg === 2){
            setView(<SignUp handleView={handleView}/>);
        }
    }
    const [view, setView] = useState(<SignUp handleView={handleView} setIsLogged={setIsLogged} />);
    return (
        <div>
            {view}
        </div>
    );
}

export default Login;

