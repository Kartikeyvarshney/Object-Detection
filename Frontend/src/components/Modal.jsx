import { CircleX } from 'lucide-react';
import Loader from "react-js-loader";
import PropTypes from "prop-types"
export default function Modal(props){
    function handleClick()
    {
        props.setResult("")
        props.setShowModal(false)
    }
    return(
        <div className="modal-view h-screen w-screen grid place-items-center absolute z-30 bg-black/30 backdrop-blur-sm " >
            {(props.isLoading)? <Loader type="bubble-scale" bgColor=
      '#219ebc' color='blue' title={"Predicting..."} size={100} />: <div className="modal rounded-xl h-3/5 w-3/6  bg-white relative">
      <CircleX className='text-red-500 absolute right-[1%] top-[4px]  cursor-pointer' onClick={handleClick}></CircleX>
      <div className='h-[90%] w-full grid place-items-center'> {props.result} </div> 
      
      </div>}
           
        </div>
    )
}

Modal.propTypes ={
    isLoading:PropTypes.func.isRequired,
    result:PropTypes.string.isRequired,
    setResult:PropTypes.func.isRequired,
    setShowModal:PropTypes.func.isRequired
}