
const ProfileImage = () => {
     return (
        <div className="flex justify-center items-center bg-transparent">
            <img
                src="/images/smiji.png" // Replace with actual profile image URL
                alt="Profile"
                className="rounded-full w-32 h-32 object-cover"
            />
        </div>
    );
};


export default ProfileImage;