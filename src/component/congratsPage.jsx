import React from 'react';

const CongratsPage = () => {
  const name = localStorage.getItem('name'); // Ambil nama dari localStorage

  return (
    <div className="bg-stone-800 w-full h-screen flex justify-center items-center px-4">
      <div className="text-center text-white text-xl w-full max-w-2xl px-4">
        <p className="text-2xl md:text-3xl font-bold pt-6 text-white">
        The latest achievement has been accomplished🚀
        </p>
        <p className="text-sm md:text-base pt-8 font-normal">
          Selamat yudisium <span className="text-yellow-300 font-semibold">{name}</span>!
        </p>
        <p className="text-sm md:text-base pt-2 font-normal text-justify">
          Akhirnya hari yang dimana ditunggu-tunggu tiba juga‼️
          Yudisium ini bukan jadi akhir dari perjuangan <span className="text-yellow-300 font-semibold">{name}</span> ya,
          tapi ini lebih dari itu. Ini juga jadi bukti dimana semua
          usaha dan kerja keras kita semua ga sia-sia. Kalian termasuk
          akupun tau gimana lelah dan capenya selama nyusun. Ada yang
          mungkin bergadang sampe kurang tidur 😓😪, ada yang lupa makan 🤢,
          bahkan ada yang ingin ngelakuin kegiatan lain tapi gabisa dilakuin
          karena perlu beresin skripsiannya 😫. Semoga terbayar ya capeknya
          semua itu sama hasil dari yudisium ini‼️
        </p>
        <p className="text-sm md:text-base pt-4 font-normal text-justify">
          Sekali lagi selamat atas yudisium dan selamat telah menamatkan UPI! 🎓
          Semoga langkah <span className="text-yellow-300 font-semibold">{name}</span> kedepannya bisa selalu dimudahkan dan dapet pekerjaan
          yang baik serta sesuai untuk <span className="text-yellow-300 font-semibold">{name}</span> ya. Dunia kerja selanjutnya yang akan <span className="text-yellow-300 font-semibold">{name}</span> hadapin
          ga bisa dibilang mudah, apapun hasil dari perjuangan kalian selanjutnya aku harap jangan pernah nyerah ya 😉
          Inget, kalau mau sukses perlu ada perjuangan heheheh. Sekarang bisa rehat sejenak sambil nyiapin CV dan revisiannya, tapi setelah itu
          selamat berjuang di dunia kerja yang cukup keras ini! Sukses selalu untuk kalian! 🌟
        </p>
        <p className="text-sm md:text-base pt-2 font-normal text-end">
          - Ibnu Aji
        </p>
      </div>
    </div>
  );
};

export default CongratsPage;
