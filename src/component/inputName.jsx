import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputName = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simpan nama ke localStorage agar bisa diakses di halaman lain
    localStorage.setItem('name', name);
    // Arahkan ke halaman kedua
    navigate('/congratsPage');
  };

  return (
    <div className="bg-stone-800 w-full h-screen flex justify-center items-center px-10">
      <div className="text-center text-white text-xl items-center w-full max-w-md">
        <p className="text-2xl md:text-3xl font-bold pt-6">⭐ Congrats Card ⭐</p>
        <p className="text-sm md:text-base pt-6 font-normal">
          Congratulation for your achievement🚀
        </p>
        <p className="text-sm md:text-base font-normal pb-2"> Please input your name here!</p>
        <form
          onSubmit={handleSubmit}
          className="pt-10 pb-5 flex flex-col items-center w-full"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleChange}
            className="text-sm md:text-base px-4 py-2.5 w-full rounded-md text-black text-center"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2.5 w-full bg-blue-600 text-white text-sm md:text-base font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        <p className="text-xs md:text-sm pt-12 font-bold">by ibnu</p>
      </div>
    </div>
  );
};

export default InputName;
