export const URLInput = (props) => {
  const { register } = props;
  return (
    <div className="flex w-full justify-center items-end">
      <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left pb-10">
        <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">
          Task URL
        </label>
        <div className="flex space-x-5">
          <input
            type="url"
            id="hero-field"
            name="hero-field"
            {...register("url")}
            className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
      </div>
    </div>
  );
};
