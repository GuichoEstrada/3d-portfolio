import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Luis</span>
        👋
        <br />
        A Software Developer from Toronto.
        <br />
        Take a tour of my 3D portfolio!
        </p>
        <Link to='portfolio-kappa-seven-58.vercel.app' className='neo-brutalism-white neo-btn'>
          Check out my other portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Just finished Information Technology Solutions <br /> and picked up many skills along the way.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led a couple of projects to success over the years. <br /> Let me show you!
        </p>

        <Link to='/projects' target="_blank" className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Let's collaborate on your next project. <br/> Together, we can create something truly special!
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;