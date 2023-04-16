import React, { useContext } from 'react';
import AuthProviders, { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <>
          <h2>This is Home: {user && <span>{user.displayName}</span>}</h2>
        </>
    );
};

export default Home;