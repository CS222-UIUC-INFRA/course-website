import React, { useEffect, useState } from 'react';

function useNetwork() {
    //Note that you can make use of other hooks within custom hooks
    const [online, setOnline] = useState(true);

    useEffect(() => {
        const goOnline = function (event) {
            console.log("I'm online");
            setOnline(true);
        };
        const goOffline = function (event) {
            console.log("Oops, I'm offline");
            setOnline(false);
        };
        window.addEventListener('offline', goOffline);
        window.addEventListener('online', goOnline);

        return () => {
            window.removeEventListener('offline', goOffline);
            window.removeEventListener('online', goOnline);
        };
    }, []);

    return online;
}

export default useNetwork;
