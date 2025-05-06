const Timer = ({handleChange, selectTimer}) => { 
    return (
      <div className="flex flex-col items-center justify-center w-1/3" >
        <label htmlFor="seconds" className="font-bold">timer</label>
        <select
        name="seconds"
          value={selectTimer}
          onChange={handleChange}
          className=" bg-white text-black !px-4 !py-2 rounded-md outline-0 text-[15px] font-bold"
        >
          <option value="3">3s</option>
          <option value="5">5s</option>
          <option value="10">10s</option>
        </select>
      </div>
    );
}
 
export default Timer;