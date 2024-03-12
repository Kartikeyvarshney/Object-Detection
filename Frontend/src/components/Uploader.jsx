import { useRef, useState } from "react";

import Preview from "./Preview";
import Error from "./Error";
// import Loader from "react-js-loader";
function Uploader() {
  const labelRef = useRef(null);
  const imageRef = useRef(null);
  const [file , setFile] = useState(null)
  const [imageUrl , setImageUrl] = useState("")
  const[result , setResult ] = useState("")
  function clickLabel() {
    labelRef.current.click();
  }
  function handleImageChange(event)
  {
    const  file = event.target.files[0];

    if(file)
    {
      setFile(file)
      const previewUrl = URL.createObjectURL(file);
      setImageUrl(previewUrl)
    }

  }
  
  return (

    <div className="reset h-screen w-screen ">
      <div className="min-h-[500px] w-4/5  grid place-items-center ml-auto mr-auto">
          <div className="h-[400px] w-[800px]  border border-solid border-black flex items-center justify-center flex-col rounded-[10px] bg-uploaderbg">
            <span className="mb-8 text-white">Upload your Image here..</span>
            <div className="h-44 w-44 hover:scale-125 flex items-center justify-center cursor-pointer transition">
            <div
              className="h-44 w-44 border-2 border-dashed border-white absolute rounded-full z-10 animate-slow-spin "
              onClick={clickLabel} // Trigger click on label when div is clicked
            ></div>
            <label
              htmlFor="Image"
              className="z-20 text-3xl select-none cursor-pointer text-white"
              ref={labelRef} // Reference to the label element
            >
              <img src="src/assets/image.png" alt="image" style={{height:'50px',width:'70px'}}/>  
            </label>
            <input type="file" name="image" id="Image" accept="image/jpg , image/png , image/jpeg" hidden ref={imageRef} onChange={handleImageChange}/></div>
            
          </div>
      </div>
      {/* <Loader type="bubble-scale" bgColor=
      'red' color='blue' title={"bubble-scale"} size={100} /> */}
      {(imageUrl!="")?<Preview setImageUrl={setImageUrl} photo={imageUrl} setResult={setResult} file={file}></Preview>:<></>}
      
      {/* <Error message='this is error'></Error> */}
      <div>{result}</div>
      
    </div>
    
    
  );
}
export default Uploader;
