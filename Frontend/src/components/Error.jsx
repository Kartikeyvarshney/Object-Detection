export default function Error(props)
{
    return(
        <div className="h-[400px] w-[900px] ml-auto mr-auto bg-red-400 bg-opacity-30 rounded-md grid place-items-center">
           <span className="text-red-600 text-4xl">{props.message}</span> 
        </div>
    )
}