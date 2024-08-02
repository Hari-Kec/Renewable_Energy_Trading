import React, { useEffect } from 'react';

const NumberVerify = () => {
    useEffect(() => {
        // Load the external script
        const script = document.createElement('script');
        script.src = "https://www.phone.email/sign_in_button_v1.js";
        script.async = true;
        document.querySelector('.pe_signin_button').appendChild(script);

        // Define the listener function
        window.phoneEmailListener = function(userObj) {
            const user_json_url = userObj.user_json_url;

            // Call the backend with the user_json_url
            fetch(`/api/verify-user?url=${encodeURIComponent(user_json_url)}`)
                .then(response => response.json())
                .then(data => {
                    console.log("User Data:", data);
                    document.querySelector('.pe_signin_button').insertAdjacentHTML('beforeend', 
                        `<span>Phone Verification Successful !! <br />User Country Code: ${data.user_country_code} <br />User Phone Number: ${data.user_phone_number} <br />User First Name: ${data.user_first_name} <br />User Last Name: ${data.user_last_name}</span>`);
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        };

        return () => {
            // Cleanup the listener function when the component unmounts
            window.phoneEmailListener = null;
        };
    }, []);

    return (
        <div className="pe_signin_button" data-client-id="15695407177920574360"></div>
    );
};

export default NumberVerify;
