import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section
             style ={{background:`url(${appointment})`}}
            className='my-28 justify-center items-center'>
            <div>
                  <div className='text-center'>
                <h3 className='text-primary text-xl font-bold'>Contact us</h3>
                <h2 className='text-4xl text-white'>Stay connected with us</h2>
            </div>
            <div className='text-center my-8'>
                <input  type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" required/><br></br>
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mt-4" required />
            </div>
            <div className='text-center mt-2'>
 
                    <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Message" required></textarea>
                    </div>
            <div className="text-center mt-2 mb-2">
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary  text-white font-bold uppercase">Submit</button>
 </div>
          </div>
        </section>
    );
};

export default Contact;