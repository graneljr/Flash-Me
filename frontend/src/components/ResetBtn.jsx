const Reset = ({setImage, setImageCount,setStarted }) => {
    const Reset = () =>{
        setImage([])
        setImageCount(0)
        setStarted(false)
    }
    return <button className="!p-[15px] text-red-500 bg-white transition-all ease-in-out hover:bg-red-500 rounded-[7px] font-bold hover:text-white duration-500" onClick={Reset}>Reset</button>
}
export default Reset;