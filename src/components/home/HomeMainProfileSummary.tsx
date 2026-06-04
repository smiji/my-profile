import React from "react";
import { saveProfileSummary } from '../Api';



type HomeMainProfileSummaryProps = {
    data : string
 };

 function HomeMainProfileSummary({data}: HomeMainProfileSummaryProps) {
    const [input, setInput] = React.useState(data);
    const [saved, setSaved] = React.useState(data);
    const [editing, setEditing] = React.useState(false);
    const handleSave = async () => {
      try {
        if (input.trim() === "") {
          alert("Summary cannot be empty");
          return;
        }
        const success = await saveProfileSummary(input);
        console.log("Save successful:", success);
        if (success) {
            setSaved(input);
            setEditing(false);
        }
      }catch (error) {
        console.error("Error saving data:", error);
      }       
    };

    return (
        <div className="p-8 bg-white shadow-md rounded-lg min-w-[400px] min-h-[100px] w-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Profile Summary</h2>

            {editing ? (
              <>
                <div className="flex flex-col gap-2">
                    <textarea
                        className="border rounded p-2 w-full mt-4"
                        rows={4}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Enter your summary here..."
                    />                    
                </div>
                <div> 
                  <button  className="mt-2 px-2 py-2 bg-gradient-to-r from-red-400 to-purple-500 text-white shadow-lg rounded"
                    onClick={handleSave}>Save</button>
                </div>
                  </>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                    <p>{saved}</p>                    
                </div>
                <div>
                  <button
                        className="mt-2 px-2 py-1 bg-blue-200 text-gray-700 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400 hover:text-white px-4 py-2 rounded"
                        onClick={() => setEditing(true)}>
                          Edit</button>
                   </div>
                </>
            )}
        </div>
    );
}

export default HomeMainProfileSummary;

