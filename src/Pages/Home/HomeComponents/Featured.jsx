import React from "react";
import img from "../../../assets/home/featured.jpg";
import ShareTitle from "../../Shared/ShareTitle";

const Featured = () => {
  return (
    <div style={{backgroundImage:`url(${img})`}} className=" bg-fixed text-white my-20">
     <div className="bg-slate-400 bg-opacity-40">
     <section className="pt-10 ">
        <ShareTitle
          title={"FROM OUR MENU"}
          subtitle={"------Check it out------"}
        />
      </section>
      <section className=" md:flex md:justify-center md:items-center gap-6 md:pb-20 pt-12 p-10 md:px-36">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="space-y-6">
          <p>
           <span className="font-medium"> March 20, 2023 <br /> WHERE CAN I GET SOME?</span> <br /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
          <button className="btn  border-0 bg-transparent border-b-4 border-b-white text-white font-bold">Read More</button>
        </div>
      </section>
     </div>
    </div>
  );
};

export default Featured;
