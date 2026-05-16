import React from 'react';

type EducationEntry = {
  id:number;
  degree: string;
  institution: string;
  university: string;
  from: string;
  to: string;
  grade: string;
};

type EducationProps = {
  entries: EducationEntry[];
};

const Education: React.FC<EducationProps> = ({ entries }) => {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
      <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-left">No</th>
            <th className="px-4 py-2 border-b text-left">Degree</th>
            <th className="px-4 py-2 border-b text-left">Institution</th>
            <th className="px-4 py-2 border-b text-left">University</th>
            <th className="px-4 py-2 border-b text-left">From</th>
            <th className="px-4 py-2 border-b text-left">To</th>
            <th className="px-4 py-2 border-b text-left">Grade</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, idx) => (
            <tr key={idx}>
              <td className="px-4 py-2 border-b">{idx + 1}</td>
              <td className="px-4 py-2 border-b">{entry.degree}</td>
              <td className="px-4 py-2 border-b">{entry.institution}</td>
              <td className="px-4 py-2 border-b">{entry.university}</td>
              <td className="px-4 py-2 border-b">{entry.from}</td>
              <td className="px-4 py-2 border-b">{entry.to}</td>
              <td className="px-4 py-2 border-b ">{entry.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Education;