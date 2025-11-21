// CustomSignOutButton.js
import React from 'react';
import { signOut } from 'aws-amplify/auth';

const CustomSignOutButton = () => {
    const handleSignOut = async () => {
        try {
            await signOut();
            // Redirect or perform any other action after sign-out
        } catch (error) {
            console.log('Error signing out: ', error);
        }
    };

    return (
        <button onClick={handleSignOut}>Sign Out</button>
    );
};

export default CustomSignOutButton;
