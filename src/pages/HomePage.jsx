// import React from 'react';

// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (


//     <div className="h-screen w-full bg-gradient-to-r from-black via-purple-950 to-gray-600 animate-gradient-x flex justify-center items-center">
//       <div className="text-white text-center text-6xl font-bold tracking-wide">
//         <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
//           Find your spark,
//         </span>

//         <span className="bg-gradient-to-r from-blue-300 to-green-400 bg-clip-text text-transparent">
//           Right on Campus!
//         </span>
//         <div>
//           <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-3 px-6 mt-20 rounded-full w-1/2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none">
//             <span className="text-5xl text-black font-semibold "><Link to={'/register'}> Get Started  </Link> </span>
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };


// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/12599627/pexels-photo-12599627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="text-white text-center text-8xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-600 to-red-800 bg-clip-text text-transparent">
            Find your spark,
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-300 to-green-400 bg-clip-text text-transparent">
            Right on Campus!
          </span>
          <div>
            <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-3 px-6 mt-20 rounded-full w-1/2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none pb-9">
              <span className="text-5xl text-black font-semibold ">
                <Link to={'/register'}> Get Started </Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
