import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';

const MakeAppointment = () => {
    return (
        <section
            style ={{background:`url(${appointment})`}}
        className='flex justify-center items-center my-40'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-180px]' src={doctor} alt=''/>
            </div>
            <div className='flex-1'>
                <h3 className='text-xl mt-5 text-primary font-bold'>appointment</h3>
                <h2 className='text-3xl py-5 text-white'>Make an Appointment Today</h2>
                <p className='text-white py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum consequuntur vel, error doloribus tempora eius? Placeat, perferendis ad minima et inventore possimus voluptatibus veniam laborum maxime voluptas unde, quidem dolor in labore officiis quibusdam laboriosam! Iusto, ullam maiores! Placeat nisi et dicta quam nesciunt doloribus incidunt blanditiis inventore vero!</p>
                <button className=" btn btn-primary bg-gradient-to-r from-secondary to-primary  text-white font-bold uppercase">Get Started</button>
            </div>
            
        </section>
    );
};

export default MakeAppointment;