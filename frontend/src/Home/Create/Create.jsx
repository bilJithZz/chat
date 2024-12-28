import React, { useState } from "react";


const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log({title,content,file})
  }

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input onChange={(e) => setFile(e.target.files[0])} type="file" />
        <input
          className="border-2 focus:ring-2 focus:outline-none focus:ring-blue-400 w-96 p-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
        />
        <div className="flex gap-3 flex-row">
        <input 
  type="text" 
  placeholder="category" 
  className="border-2 " 
  style={{ width: `${"category".length +1}ch` }} 
/>
<p  style={{ width: `${"category".length +1}ch` }}  className="border-2 rounded-full">technicl </p>
<p  style={{ width: `${"category".length +1}ch` }}  className="border-2 rounded-full">technicl </p>
        </div>
   

        <textarea
          className="border-2 h-80 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 p-2"
          placeholder="Write your blog content here"
          value={content}
          onChange={(e) => 
            setContent(e.target.value)
          }
        
        ></textarea>
        <button className="bg-yellow-400 cursor-pointer p-4">Submit</button>
      </form>
    </div>
  );
};

export default Create;
