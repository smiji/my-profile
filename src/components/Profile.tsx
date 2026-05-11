import React from 'react';

type ProfileProperties = {
    id: number,
    title: string,
    description: string
}


const Profile: React.FC<{profile:ProfileProperties}> = ({profile}) => {
    return (
        <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto my-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{profile.title}</h2>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;
