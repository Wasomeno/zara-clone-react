import React from "react";

const SearchPage = () => {
  const mockItem: Array<string> = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <div className="bg-slate-50 p-6 h-screen">
      <div className="flex items-center justify-start gap-4 w-full">
        <button
          className={
            "font-medium tracking-wider text-xs transition ease-in-out duration-300 font-inter"
          }
          onClick={() => ""}
        >
          WANITA
        </button>
        <button
          className={
            "font-medium tracking-wider text-xs transition ease-in-out duration-300 font-inter"
          }
          onClick={() => ""}
        >
          PRIA
        </button>
        <button
          className={
            "font-medium tracking-wider text-xs transition ease-in-out duration-300 font-inter"
          }
          onClick={() => ""}
        >
          ANAK - ANAK
        </button>
      </div>
      <div className="mt-6 mb-10">
        <input
          type="text"
          placeholder="SEARCH"
          className="w-full bg-transparent border-b border-b-slate-900 font-inter font-light tracking-wider uppercase py-2 text-xs"
        />
      </div>
      <div className="h-4/6 border-t-2 border-t-slate-900 overflow-y-scroll">
        <div className="grid grid-cols-7 h-full py-4 gap-4">
          {mockItem.map((item, index) => (
            <div className="col-span-1">
              <div
                key={index}
                className="bg-slate-500 bg-opacity-20 h-72 w-full"
              />
              <div className="flex justify-between items-center">
                <p className="text-xs font-inter font-light">NAME</p>
                <p className="text-xs font-inter font-light">PRICE</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
