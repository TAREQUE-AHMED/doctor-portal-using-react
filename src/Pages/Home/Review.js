
const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et exercitationem eum placeat odio asperiores.</p>
    <div className="flex items-center">
      <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
    <img my-2 src={review.img} alt=''/>
 </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
    </div>
  </div>
</div>
    );
};

export default Review;