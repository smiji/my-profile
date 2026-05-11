import React from 'react';

type SkillsGroup = {
    "skill-name": string;
    skills: string[];
}

const Skills: React.FC<{ skillsGroups: SkillsGroup[] }> = ({ skillsGroups }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-left">Skills</h2>
            {
                skillsGroups.map((group, index) => 
                    <div key={index} className="mb-4">
                    <h2 className="text-xl font-bold mb-2 text-left">{group["skill-name"]}</h2>      
                    <ul className="list-disc list-inside">
                        {
                        group.skills.map((skill, idx) => 
                            (
                                <li key={idx} className="text-left">{skill}</li>
                            ))
                        }
                    </ul>    
                </div>
                )}
        </div>
    );
};

export default Skills;