
import axios from 'axios'
export default function Preview(props)
{

    function close()
    {
        props.setImageUrl("");
    }
    async function predictImage()
    {
      const formData = new FormData();
     
      formData.append('image',props.file)
      const response = await axios.post('http://localhost:8000/predict',formData,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      }) 
      // if(result.error)
      // {
  
      // }
    
      console.log(response.data.result)
      props.setResult(response.data.result)
  
    }
    return(
         <div className="group relative h-[400px] w-[900px]  ml-auto mr-auto">
          
            <img className="block h-full w-full rounded-md group-hover:blur-sm transition-all" src={props.photo} alt="" />
            <div className="h-full w-full absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"onClick={ predictImage}>Upload</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={close}>Delete</button>
            </div>
        </div>
        
    )
    
}

