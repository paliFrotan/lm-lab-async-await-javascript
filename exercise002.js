import fetch from "node-fetch";

const jsonTypicode = "https://placekitten.com/g/200/300";

const fetchData = async (apiEndPoint) => {
  try 
    {
      const response = await fetch(apiEndPoint);
      const urlResponse = response.url;
      console.log(urlResponse);
    } 
  catch(error) 
    {console.log(error);}
};

fetchData(jsonTypicode);
