import React from "react";
import { fetchLocations } from "../Api";
import PhoneNumberField from "./PhoneNumberField";

type PersonalDetailsProps = {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneMain: string;
  phoneAlternate: string;
  website: string;
  address: string;
  presentLocation: string;
  emailMain: string;
  emailAlternate: string;
};    

type Errors = {
  firstName?: string;
  emailMain?: string;
  phoneMain?: string;
  presentLocation?: string;
};


const PersonalDetails: React.FC  = () => {


const [errors, setErrors] = React.useState<Errors>({});
const [locationSuggestions, setLocationSuggestions] = React.useState<any[]>([]);
const [showSuggestions, setShowSuggestions] = React.useState(false);
const [highlightedIndex, setHighlightedIndex] = React.useState(-1);

const isLikelyInternationalPhone = (value: string) => /^\+[1-9]\d{6,14}$/.test(value);

const validate = () => {
  const newErrors: Errors = {};
  if (!firstName.trim()) newErrors.firstName = "First name is required";
  if (!presentLocation.trim()) newErrors.presentLocation = "Present location is required";
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailMain)) newErrors.emailMain = "Invalid email";
  if (!phoneMain || !isLikelyInternationalPhone(phoneMain)) newErrors.phoneMain = "Enter a valid phone number";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const locationFetcher = (prefix: string) => {
  setPresentLocation(prefix);
  setHighlightedIndex(-1);
  if (prefix.trim().length === 0) {
    setLocationSuggestions([]);
    setShowSuggestions(false);
    return;
  }
  fetchLocations(prefix)
    .then(locations => {
      setLocationSuggestions(locations || []);
      setShowSuggestions(true);
    })
    .catch(error => {
      console.error("Error fetching locations:", error);
      setLocationSuggestions([]);
      setShowSuggestions(false);
    });
};

const handleSuggestionClick = (suggestion: any) => {
  setPresentLocation(suggestion.cityName + (suggestion.countryName ? ", " + suggestion.countryName : ""));
  setShowSuggestions(false);
  setLocationSuggestions([]);
  setHighlightedIndex(-1);
};

const handleLocationKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (!showSuggestions || locationSuggestions.length === 0) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    setHighlightedIndex(prev => (prev < locationSuggestions.length - 1 ? prev + 1 : 0));
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    setHighlightedIndex(prev => (prev > 0 ? prev - 1 : locationSuggestions.length - 1));
  } else if (e.key === "Enter") {
    if (highlightedIndex >= 0 && highlightedIndex < locationSuggestions.length) {
      handleSuggestionClick(locationSuggestions[highlightedIndex]);
    }
  } else if (e.key === "Escape") {
    setShowSuggestions(false);
  }
};
  const [editing, setEditing] = React.useState(false);
  
  const handleSave = () =>{
    if (!validate()) return;  
    setEditing(false);
  };
  const handleEdit =()  =>setEditing(true);

  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneMain, setPhoneMain] = React.useState("");
  const [phoneAlternate, setPhoneAlternate] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [presentLocation, setPresentLocation] = React.useState("");
  const [emailMain, setEmailMain] = React.useState("");
  const [emailAlternate, setEmailAlternate] = React.useState("");  

return (  
  <div className="p-8 bg-white shadow-md rounded-lg min-w-[400px] min-h-[100px] w-full flex flex-col justify-center">
     <h1 className="text-2xl font-bold mb-4">Personal Details</h1>

     <div className="grid grid-cols-2 gap-8  w-full">  
     
        <div className="flex flex-col gap-2 w-full">
          First Name 
          {
              errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>
            }
          {editing ? (                        
            <input  type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}  placeholder="First Name" className="border rounded p-2 w-full"/>                        
          ) : (
            <span className="p-2 text-cyan-700">{firstName}</span>
          )}
          Middle Name
          {
            editing ? (
              <input  type="text" name="middleName" value={middleName} onChange={e => setMiddleName(e.target.value)}  placeholder="Middle Name" className="border rounded p-2 w-full"/> 
            ) : (
              <span className="p-2 text-cyan-700">{middleName}</span>
            )
          }
          Last Name
          {
            editing ? (
              <input  type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}  placeholder="Last Name" className="border rounded p-2 w-full"/> 
            ) : (
              <span className="p-2 text-cyan-700">{lastName}</span>
            )
          }
        </div>  
              
        <div className="flex flex-col gap-2 w-full">
          <PhoneNumberField
            label="Phone (main)"
            value={phoneMain}
            onChange={setPhoneMain}
            editing={editing}
            defaultCountry="gb"
            error={errors.phoneMain}
          />

          <PhoneNumberField
            label="Phone (alternate)"
            value={phoneAlternate}
            onChange={setPhoneAlternate}
            editing={editing}
            defaultCountry="gb"
          />

          Website 
          {
            editing ? (
              <input type="text" name="website" value={website} onChange={e => setWebsite(e.target.value)} placeholder="Website" className="border rounded p-2 w-full" /> 
            ) : (
              <span className="p-2 text-cyan-700">{website}</span>
            )
          }
        </div> 
     
        <div className="flex flex-col gap-2 w-full">
            Email (main) 
            {errors.emailMain && <span className="text-red-500 text-sm">{errors.emailMain}</span>}
            {editing ? (  
              <input type="email" name="emailMain" value={emailMain} onChange={e => setEmailMain(e.target.value)} placeholder="Email (main)" className="border rounded p-2 w-full"/>
            ) : (
              <span className="p-2 text-cyan-700">{emailMain}</span>
            )}  
                          
            Present Location 
            {errors.presentLocation && <span className="text-red-500 text-sm">{errors.presentLocation}</span>}
            {editing ? (
              <div className="relative">
                <input
                  type="text"
                  name="presentLocation"
                  value={presentLocation}
                  onChange={e => locationFetcher(e.target.value)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                  onFocus={() => { if (locationSuggestions.length > 0) setShowSuggestions(true); }}
                  onKeyDown={handleLocationKeyDown}
                  placeholder="Present Location"
                  className="border rounded p-2 w-full"
                  autoComplete="off"
                />
                {showSuggestions && locationSuggestions.length > 0 && (
                  <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 max-h-40 overflow-y-auto rounded shadow">
                    {locationSuggestions.map((suggestion, idx) => (
                      <li
                        key={idx}
                        className={`px-3 py-2 cursor-pointer ${highlightedIndex === idx ? "bg-blue-100" : "hover:bg-blue-100"}`}
                        onMouseDown={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion.cityName}
                        {suggestion.countryName ? `, ${suggestion.countryName}` : ""}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <span className="p-2 text-cyan-700">{presentLocation}</span>
            )}                              
        </div> 

         <div className="flex flex-col gap-2 w-full">
          Email (alternate)
          {
            editing ? (
              <input type="email" name="emailAlternate" value={emailAlternate} onChange={e => setEmailAlternate(e.target.value)} placeholder="Email (alternate)" className="border rounded p-2 w-full" />
            ) : (
              <span className="p-2 text-cyan-700">{emailAlternate}</span>
            )
          }
             
            Address {
              editing ? (
                <textarea name="address"  value={address}  onChange={e => setAddress(e.target.value)} placeholder="Address" className="border rounded p-2 w-full"/>
              ) : (
                <span className="p-2 text-cyan-700">{address}</span>
              )
            }
        </div>

        {/* Buttons goes here */}
        <div className="col-span-2 flex justify-center gap-4 mt-4">
              {editing ?  (
          <button className="mt-2 px-8 py-2 bg-gradient-to-r from-red-400 to-purple-500 text-white shadow-lg rounded" onClick={handleSave}>
            Save
          </button>
        ) : (<button className="mt-2 px-8 py-2 bg-blue-200 text-gray-700 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400 hover:text-white rounded" onClick={handleEdit}>
              Edit
            </button>)}
        </div>
        
      </div>
     </div> 
);
};
export default PersonalDetails;
