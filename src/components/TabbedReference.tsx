import React, { useState } from 'react';

type TabbedReferenceProps = {
    referenceEntries: Array<{
        id: number;
        name: string;
        company: string;
        contact: string;
        label: string;
    }>;
};

const TabbedReference:React.FC<TabbedReferenceProps> = ({ referenceEntries }) => {

    const [activeTab, setActiveTab] = useState(0);
    return ( 
        <div className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto my-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">References</h2>
            <div className="flex mb-4 border-b"> 
                {
                referenceEntries.map((ref, idx) => {                    
                    return <button key={ref.id}
                    className={`px-4 py-2 mx-1 mb-1 rounded-full font-medium focus:outline-none transition-colors duration-200 
                    ${activeTab === idx
                        ? 'bg-gradient-to-r from-red-400 to-purple-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400 hover:text-white'}
                    `}
                    onClick={() => setActiveTab(idx)}
                    >{ref.label}</button>
                })                    
                }
                </div>
                <div className="mt-4">
                    {referenceEntries.length > 0 && (
                        <div>
                            <p className="mb-1"><strong>Name:</strong> {referenceEntries[activeTab].name}</p>
                            <p className="mb-1"><strong>Company:</strong> {referenceEntries[activeTab].company}</p>
                            <p className="mb-1"><strong>Contact:</strong> {referenceEntries[activeTab].contact}</p>
                        </div>
                    )}
                </div>                                                                                       
        </div>
    );
}


    

            
        
        
             
                                              
                            

export default TabbedReference;