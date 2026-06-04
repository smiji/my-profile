
export async function saveProfileSummary(data: string) {
      alert("Saving summary: " + data);
      console.log("Request body:", JSON.stringify({ data: data }));
      const apiUrl = process.env.REACT_APP_API_URL;
      console.log("API URL:", apiUrl);
      const response = await fetch(`${apiUrl}`, {
      method : 'POST',
      headers : { 'Content-Type' : 'application/json'},
      body : JSON.stringify({data}),
    });
    if (!response.ok){     
      console.error("Failed to save data");
    }
    return response.ok;
}

export async function fetchLocations(prefix: string) {
  //alert("Fetching locations for prefix: " + prefix);
  const apiUrl = process.env.REACT_APP_API_LOOKUP_URL;
  try {
    const response = await fetch(`${apiUrl}/cities/${encodeURIComponent(prefix)}`);
    if (!response.ok) {
      console.error("Failed to fetch locations");
      return [];
    }
    const text = await response.text();
    const dataLocation = text ? JSON.parse(text) : {};
    return dataLocation || [];
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
}

export type PersonalDetailsData = {
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

export type PersonalDetailsErrors = {
  firstName?: string;
  emailMain?: string;
  phoneMain?: string;
  presentLocation?: string;
};

