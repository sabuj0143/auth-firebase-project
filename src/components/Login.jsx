import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    // Rcd ta AuthProvider function.............. 
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    // console.log(signIn);

    const handleLoginUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Set the Register System ................
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error.massage);
            })
    };
    const handleSignInGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <label className="label mb-10 mx-auto">
                        <Link to="/register" className="label-text-alt link link-hover">New to P-hero? Register Now...</Link>
                    </label>


                    <label className="label mb-10 mx-auto">
                        <Link to="/register" className="label-text-alt link link-hover"><button onClick={handleSignInGoogle} className="btn btn-active btn-primary">Google Login</button></Link>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Login; <h3>This is login</h3>