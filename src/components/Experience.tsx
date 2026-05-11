import React, { useState } from 'react';

type ExperienceEntry = {
  id: number;
  jobTitle: string;
  company: string;
  client: string;
  from: string;
  to: string;
  location: string;
  description: string;
};

type ExperienceProps = {
  entries: ExperienceEntry[];
};

const Experience: React.FC<ExperienceProps> = ({ entries }) => {
  // Group entries by company+client
  const groups: { [key: string]: ExperienceEntry[] } = {};
  entries.forEach((entry) => {
    const key = `${entry.company} - ${entry.client}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(entry);
  });

  const tabNames = Object.keys(groups);
  const [activeTab, setActiveTab] = useState(tabNames[0] || '');

  return (
    <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
      {/* Tabs */}
      <div className="flex mb-4 border-b">
        {tabNames.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 -mb-px border-b-2 font-medium focus:outline-none transition-colors duration-200 ${
              activeTab === tab
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-left">No</th>
              <th className="px-4 py-2 border-b text-left">Job Title</th>
              <th className="px-4 py-2 border-b text-left">Company</th>
              <th className="px-4 py-2 border-b text-left">From</th>
              <th className="px-4 py-2 border-b text-left">To</th>
              <th className="px-4 py-2 border-b text-left">Location</th>
              <th className="px-4 py-2 border-b text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {groups[activeTab]?.map((entry, idx) => (
              <tr key={entry.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2 border-b">{idx + 1}</td>
                <td className="px-4 py-2 border-b">{entry.jobTitle}</td>
                <td className="px-4 py-2 border-b">{entry.company}</td>
                <td className="px-4 py-2 border-b">{entry.from}</td>
                <td className="px-4 py-2 border-b">{entry.to}</td>
                <td className="px-4 py-2 border-b">{entry.location}</td>
                <td className="px-4 py-2 border-b whitespace-pre-line">{entry.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Experience;