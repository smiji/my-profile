
type HeaderProps = {    
    name: string;
    title: string;
    contact: { 
      email: string; 
      value: string;
      phone: string;
      linkedin: string;
      address: string;
     };
};

const Header: React.FC<HeaderProps> = ({...entries}) => {
    const { name, title, contact } = entries;
    return (
      <div> 
    <div>
      <h1 className="text-4xl font-bold">{name}</h1>
      <p className="text-xl text-gray-300">{title}</p>
     </div>     
      <div className="mt-2 text-sm text-gray-500 flex justify-between items-center">
        <div>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
      </div>
      <div className="text-right">
          <p>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedin}</a></p>
          <p>Address: </p>
      </div>
    </div>
    </div>
    );  
};

export default Header;
