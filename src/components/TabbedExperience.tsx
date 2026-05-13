import React from 'react';

type TabbedExperienceProps = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>; 
  experiences: Array<{
    id: number;
    jobTitle: string;
    company: string;
    client: string;
    from: string;
    to: string;
    location: string;
    description: string;
  }>;
};

const TabbedExperience: React.FC<TabbedExperienceProps> = ({ experiences, activeTab, setActiveTab }) => {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
      <div className="flex mb-4 border-b">
        {experiences.map((exp, idx) => (
          <button
            key={exp.id}
            className={`px-4 py-2 mx-1 mb-1 rounded-full font-medium focus:outline-none transition-colors duration-200 
              ${activeTab === idx
                ? 'bg-gradient-to-r from-red-400 to-purple-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400 hover:text-white'}
            `}
            onClick={() => setActiveTab(idx)}
          >
            {exp.company} - {exp.client}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {experiences.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">{experiences[activeTab].jobTitle}</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              <div>
                <p className="mb-1"><strong>Company:</strong> {experiences[activeTab].company}</p>
                <p className="mb-1"><strong>Client:</strong> {experiences[activeTab].client}</p>                
              </div>
              <div className="text-right">
                <p className="mb-1"><strong>From:</strong> {experiences[activeTab].from}</p>
                <p className="mb-1"><strong>To:</strong> {experiences[activeTab].to}</p>
                <p className="mb-1"><strong>Location:</strong> {experiences[activeTab].location}</p>                
              </div>
              <div className="col-span-2">
                <p className="mb-1 whitespace-pre-line"><strong>Description:</strong> {experiences[activeTab].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedExperience;
