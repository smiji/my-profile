import React from "react";
import HomeLeftMenu from "./HomeLeftMenu";
import { Routes,Route } from "react-router-dom";
import HomeMainProfileSummary from "./HomeMainProfileSummary";
import PersonalDetails from "./PersonalDetails";

const Home: React.FC = () => {
  return (
    //make 2 column layout , left side , list items with link
    // middle side the page to add the content of the page
    <div className="min-h-screen flex flex-col">  
    <div className="flex-1 grid grid-cols-[10%_80%] gap-2 px-4 py-8 bg-grey-100">
          <div className="flex flex-col gap-4">
            <HomeLeftMenu />
           </div>
          
          <main className="flex-1 p-4 bg-white shadow-md rounded-lg">              
              <Routes>              
                <Route path="profile" element={
                  <div className="flex items-start justify-center h-full">
                    <HomeMainProfileSummary data="Profile Summary Data" />
                  </div>
                  } />

                  <Route path="personal-details" element={
                  <div className="flex items-start justify-center h-full">
                    <PersonalDetails />
                  </div>
                  } />

              </Routes>                   
          </main>                      
    </div>
    </div>
  );
};

export default Home;
