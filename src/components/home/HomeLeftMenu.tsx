import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSummary = () => {
    return (
    <nav className="h-full w-48 bg-white-200 p-4 flex flex-col space-y-4">
      <Link to="/personal-details" className="hover:text-orange-600">Personal Details</Link>
      <Link to="/image" className="hover:text-orange-600">Image</Link>
      <Link to="/profile" className="hover:text-orange-600">Profile</Link>
      <Link to="/experience" className="hover:text-orange-600">Experience</Link>
      <Link to="/education" className="hover:text-orange-600">Education</Link>
      <Link to="/certifications" className="hover:text-orange-600">Certifications</Link>
      <Link to="/reference" className="hover:text-orange-600">Reference</Link>      
     </nav>            
    );
}

export default ProfileSummary;