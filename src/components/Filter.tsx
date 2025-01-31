export default function Filter() {
  return (
    <form className="flex flex-wrap justify-center items-center gap-4 p-10 bg-[#E1E1E1] rounded-lg">
      <label className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px] flex items-center">
        <input
          type="text"
          name="type"
          className=" outline-none bg-transparent placeholder-black"
          placeholder="საძიებო სიტყვა"
        />
      </label>

      <select
        name="city"
        className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
      >
        <option value="">თემატიკა</option>
      </select>

      <select
        name="actor"
        className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
      >
        <option value="">ავტორი</option>
      </select>

      <select
        name="time"
        className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
      >
        <option value="">თარიღი</option>
      </select>

      <label className="border border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px] flex justify-between items-center gap-2">
        <span>რედაქტორის რჩეული</span>
        <input type="checkbox" name="type" className="w-4 h-4" />
      </label>

      <button
        type="submit"
        className="col-span-1 bg-[#6D9696] text-white rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
      >
        ძებნა
      </button>
    </form>
  );
}
