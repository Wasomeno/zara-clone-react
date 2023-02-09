import React from "react";

const LoginPage = () => {
  return (
    <div className="h-screen bg-slate-50 flex justify-start items-center gap-5">
      <div className="w-5/6 p-2 flex justify-center gap-4">
        <div className="w-2/6">
          <div className="my-4">
            <p className="tracking-wider text-sm font-semibold font-inter">
              AKSES AKUN ANDA
            </p>
          </div>
          <form
            onSubmit={() => "eest"}
            className="flex flex-col items-start gap-5 w-full"
          >
            <input
              type="text"
              placeholder="EMAIL"
              className="font-light text-xs tracking-wider pb-2 bg-transparent border-b border-b-slate-500 w-full"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              className="font-light text-xs tracking-wider pb-2 bg-transparent border-b border-b-slate-500 w-full"
            />
            <input
              type="submit"
              value="LOG IN"
              className="p-2 py-3 bg-slate-900 text-white text-xs w-full tracking-wider font-light font-inter my-8"
            />
          </form>
          <p className="text-xs font-light tracking-wider font-inter">
            Apakah Anda lupa kata sandi Anda?
          </p>
        </div>
        <div className="w-2/6 flex flex-col items-end">
          <div className="w-5/6">
            <div className="my-4">
              <p className="tracking-wider  text-sm font-semibold font-inter">
                PERLU AKUN ?
              </p>
            </div>
            <button className="p-3 text-xs font-light font-inter tracking-wider border border-slate-900 w-full">
              DAFTARKAN DIRI ANDA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
