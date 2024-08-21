import "./App.css";
import {useState} from "react";

function App() {
  const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",
    country:"India",streetAddress:"",city:"",state:"",postalCode:"",
    comments:false,candidates:false,offers:false,pushNotifications:""});

  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setFormData( (prev)=>({
      ...prev,
      [name]:type==="checkbox"?checked:value
    }))
  }

  function submitHandler(event){
      event.preventDefault();
      console.log("printing the entire form data.")
      console.log(formData)
  }

  return (
   <div className="flex flex-col items-center mt-10">
    <form onSubmit={submitHandler} className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg w-full">

      <h2 className="text-2xl font-bold mb-4 text-center">User Information</h2>

      <label htmlFor="first-name" className="block text-sm font-medium">First Name :   </label><br/>
      <input
         type="text"
         placeholder="Shreyas"
         name="firstName"
         value={formData.firstName}
         id="first-name"
         onChange={changeHandler}
         className="outline-none mt-1 mb-4 p-2 w-full border border-gray-300 rounded"
      /><br/>
      
      <label htmlFor="lastName " className="block text-sm font-medium">Last Name :</label><br/>
      <input
        type="text"
        placeholder="Ojha"
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline-none mt-1 mb-4 p-2 w-full border border-gray-300 rounded"
      /><br/>

       <label htmlFor="email" className="block text-sm font-medium">Email ID :</label><br/>
      <input
        type="email"
        placeholder="niyasharma1996@gmail.com"
        name="email"
        id="email"
        value={formData.email}
        onChange={changeHandler}
        className="outline-none mt-1 mb-4 p-2 w-full border border-gray-300 rounded"
      /><br/>
      
      <label htmlFor="country" className="block text-sm font-medium">Country :</label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="moutline-none m-1 mb-4 p-2 w-full border border-gray-300 rounded"
      >
        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select><br/>

      <label htmlFor="streetAddress" className="block text-sm font-medium"> Street Address :</label><br/>
      <input
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="A-25C"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline-none mt-1 mb-4 p-2 w-full border border-gray-300 rounded" 
      /><br/>

      <label htmlFor="city" className="block text-sm font-medium">City :</label><br/>
      <input
        type="text"
        placeholder="Bhopal"
        name="city"
        id="city"
        value={formData.city}
        onChange={changeHandler}
        className="outline-none mt-1 mb-4 p-2 w-full border border-gray-300 rounded"
      /><br/>

      <label htmlFor="state" className="block text-sm font-medium">State :</label><br/>
      <input
        type="text"
        placeholder="Madhya Pradesh"
        name="state"
        id="state"
        value={formData.state}
        onChange={changeHandler}
        className="outline-none mt-1 mb-4 p-2 w-full border border-gray-300 rounded"
      /><br/>

      <label htmlFor="postalCode" className="block text-sm font-medium">Postal Code :</label><br/>
      <input
        type="text"
        placeholder="462046"
        name="postalCode"
        id="postalCode"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline-none mt-1 mb-4 p-2 w-full border border-gray-300 rounded"
      /><br/><br/>

      <fieldset className="mb-4">
        <legend className="text-lg mb-2 font-medium">By Email :</legend>

        <div className="flex items-start mb-2">
        <input
          type="checkbox"
          name="comments"
          id="comments"
          checked={formData.comments}
          onChange={changeHandler}
          className="mt-1"
        />
        <div className="ml-2">
          <label htmlFor="comments" className="font-medium">Comments</label>
          <p className="text-sm">Get notified when someones posts a comment on a posting.</p>
        </div>
        </div>

        <div className="flex items-start mb-2">
          <input
            type="checkbox"
            name="candidates"
            id="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
            className="mt-1"
          />
          <div className="ml-2">
            <label htmlFor="candidates" className="font-medium">Candidates</label>
            <p className="text-sm">Get notified when a candidate applied for a job.</p>
          </div>
        </div>

        <div className="flex items-start">
          <input
             type="checkbox"
             name="offers"
             id="offers"
             checked={formData.offers}
             onChange={changeHandler}
             className="mt-1"
          />
          <div className="ml-2">
            <label htmlFor="offers" className="font-medium">Offers</label>
            <p className="text-sm">Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </div>
      </fieldset>
      <br/>

      <fieldset className="mb-4">
        <legend className="text-lg font-medium mb-2">Push Notifications</legend>
        <p className="text-sm mb-2">These are delivered via SMS to your mobile phone.</p>

        <input
          type="radio"
          name="pushNotifications"
          id="pushEverything"
          value="Everything"
          onChange={changeHandler}
          className="mr-2"
        />
        <label htmlFor="pushEverything" className="mr-4">Everything</label><br/>

        <input
          type="radio"
          name="pushNotifications"
          id="pushEmail"
          value="Same as email"
          onChange={changeHandler}
          className="mr-2"
        />
        <label htmlFor="pushEmails" className="mr-4">Same as email</label><br/>

        <input
          type="radio"
          name="pushNotifications"
          id="pushNothing"
          value="No push notifications"
          onChange={changeHandler}
          className="mr-2"
        />
        <label htmlFor="pushNothing" className="mr-4">No push notifications</label>
      </fieldset>

      <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600 transition duration-300">Save</button>
    </form>
   </div>
  );
}

export default App;
