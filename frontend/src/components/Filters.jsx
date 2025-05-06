const Filter = ({filter, setFilter}) => { 
  const changeFilter = (e)=>{
    setFilter(e.target.value);
  }
    return (
      <div className="flex flex-col items-center justify-center w-1/3">
        <label htmlFor="seconds" className="font-bold">Filters</label>
         <select
          name="seconds"
          value={filter}
          onChange={changeFilter}
          className=" bg-white text-black w-[80%] !px-2 !py-2 rounded-md outline-0 text-[15px] font-bold"
        >
        <option value="none">Normal</option>
        <option value="grayscale(100%)">Black & White</option>
        <option value="sepia(60%)">Vintage</option>
        <option value="brightness(1.2) contrast(1.1)">Bright</option>
        <option value="contrast(1.5) brightness(0.9)">Dramatic</option>
        <option value="hue-rotate(45deg) saturate(1.5)">Golden Hour</option>
        <option value="hue-rotate(200deg) brightness(1.1)">Cool Blue</option>
        <option value="hue-rotate(-20deg) saturate(1.8)">Warm Glow</option>
        <option value="invert(1)">Negative</option>
        <option value="blur(2px)">Soft Blur</option>
        </select>
      </div>
    );
}
 



export default Filter;