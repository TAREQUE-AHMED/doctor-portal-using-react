import treatment from '../../assets/images/treatment.png';

const Extra = ({title, descrip}) => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl"/>
    <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{ descrip}</p>
      <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary  text-white font-bold uppercase">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Extra;