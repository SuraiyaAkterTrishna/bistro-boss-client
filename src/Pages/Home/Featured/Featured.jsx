import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item text-white my-20 bg-fixed ">
      <div className="bg-black bg-opacity-50 pt-8">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
            <p>Aug 20, 2024</p>
            <p className="uppercase">Where can I get some?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni architecto alias necessitatibus consequuntur molestias dolore. Officiis beatae nam consectetur impedit natus, quasi nostrum voluptatum totam consequatur? Maxime alias ipsa incidunt quos dolores beatae nobis ex, illum modi, blanditiis, ipsam officiis ab similique magni numquam cumque. Eveniet dignissimos corporis nesciunt voluptas.</p>
            
            <button className="m-4 btn btn-outline border-0 border-b-4 border-white text-white hover:bg-white hover:text-black hover:border-0">Order Now</button>
            
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
