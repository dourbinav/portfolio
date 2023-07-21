import React from "react";

export default function Content() {
  return (
    <div id="Home">
      <div className="  p-10 md:flex px-10 h-full">
        <div className="md:flex-col  md:flex md:-ml-10 invisible  md:w-16   md:visible w-0  ">
          <div  className="md:items-center  md:flex md:flex-col  my-auto md:h-30 bg-white md:p-2 rounded-sm">
          <div className="hover:bg-gray-500 cursor:auto "> 
           <a href="https://www.linkedin.com/in/naval-dourbi-b0a5b2226/"> <img
              className="w-10    rounded-full "
              src="https://cdn-icons-png.flaticon.com/512/4138/4138173.png"
            /> </a></div>
           <div className="hover:bg-black cursor:auto "><a href="https://github.com/Dourbinaval"> <img
              className="w-10  hover:bg-gray-400  rounded-full"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            /></a></div>
           <div className="hover:bg-black cursor:auto "><a href="https://www.instagram.com/"> <img
              className="w-10   rounded-full"
              src="https://w7.pngwing.com/pngs/274/823/png-transparent-icon-essential-instagram-2016-app-logo-vector-images-social-networks.png"
            /></a></div>
          </div>
        </div>
        <img
          className="aspect-square w-1/2 md:w-1/3  rounded-full  z-10 mt-6 mx-auto bg-black "
          src="https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg"
        />

        <div className="  mx-auto text-center my-auto md:w-1/2   ">
          <p className="font-bold my-6  text-3xl "> HEY, I M NAVAL DOURBI</p>
          <div>
            <p className="font-semibold text-xl    ">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <a href="#Projects"><button className="bg-white font-bold text-purple-600 w-20 p-2 rounded-md my-10">
            Projects
          </button></a>
        </div>
      </div>
    </div>
  );
}
