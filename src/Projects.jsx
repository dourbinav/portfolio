import React from "react";

export default function Projects() {
  return (
    <>
        <div id="Projects" className="font-bold text-3xl  text-center mt-10 mb-4">Projects</div>
        <div className="h-[5px] w-[35px] m-auto bg-purple-700 rounded-md "></div>
      <div className="grid sm:grid-cols-2 justify-center  sm:mx-24">
        <div className=" m-3  object-cover  bg-purple-600">
          <img
            className="p-2 "
            src="https://www.lifewire.com/thmb/WzpEftXT5jDd699KSY8RYN2WoLE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crackle-free-movie-app-92d686ed71a24934b472f348593be9ad.png"
          />
          <p className="p-2 text-center font-semibold text-white">
            A movies app which i have created using reactjs, tailwind css ,html. it search and show about the movies.
          </p>
        </div>
        <div className=" m-3 object-cover bg-purple-600">
          <img
            className="p-2 sm:h-18"
            src="https://images.ctfassets.net/lzny33ho1g45/6Zu8NJclC9oAPkMLBhvj6R/a25e1c8d714a633ad4920325ee688769/image9.jpg?w=1400"
          />
          <p className="p-2 text-center text-white font-semibold" >
             A todo app which we can have a record of your activities. in this i have html, css ,javascript, reactjs.
          </p>
        </div>
        <div className=" m-3 sm:flex  sm:flex-col sm:justify-center   bg-purple-600">
          <img
            className="p-2 object-fill "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXbaI8zgxMqntTVxI3zyz1foC-He0JRkEaw&usqp=CAU"
          />
          <p className="p-2 text-center font-semibold text-white">
            it is ecommerce app which i have built from reactjs ,mongodb ,expressjs and nodejs.
          </p>
        </div>
        <div className=" m-3   bg-purple-600">
          <img
            className="p-2 object-contain "
            src="https://cdn.dribbble.com/users/87496/screenshots/3469136/media/72fc5d59b7c8c5ecc1cd24ccbaf2e497.png?compress=1&resize=400x300&vertical=center"
          />
          <p  className="p-2 text-center font-semibold text-white" >
            A resume uploader which i have created from reactjs ,expressjs ,mongodb, nodejs .          </p>
        </div>
      </div>
    </>
  );
}
