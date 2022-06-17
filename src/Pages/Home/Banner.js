import chair from '../../assets/images/chair.png';
const Banner = () => {
    return (
       <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl"/>
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts <br></br>Here</h1>
      <p className="py-6">Feel like you lack the smile that you desire? Smile with confidence today! At About Smiles, we offer a wide range of cosmetic treatment.  With the luxury of our own in house ceramists, we will make sure you leave with your perfect smile. </p>
      <button className=" btn btn-primary bg-gradient-to-r from-secondary to-primary  text-white font-bold uppercase">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;