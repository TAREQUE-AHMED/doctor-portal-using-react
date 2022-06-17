
const InfoCard = ({img, CardTitle, discription, bgClass}) => {
    return (
       <div className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="" />
            </figure>
  <div className="card-body">
                <h2 className="card-title">{CardTitle}</h2>
                <p>{discription}</p>
  </div>
</div>
    );
};

export default InfoCard;