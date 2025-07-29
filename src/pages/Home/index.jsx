import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/ui/Button';

const Home = () => {
  const services = [
    {
      id: 1,
      icon: '/images/HomePage/grid_icon1.svg',
      title: 'Application Development',
      description: 'We provide application development services driven by the enthusiasm of young minds.'
    },
    {
      id: 2,
      icon: '/images/HomePage/grid_icon2.svg',
      title: 'IT Consultancy',
      description: 'We provide cutting-edge consultancy in AI, ML, Data Science, and more.'
    },
    {
      id: 3,
      icon: '/images/HomePage/grid_icon3.svg',
      title: 'Custom Software Solutions',
      description: 'We build custom apps for Android and iPhone for global clients.'
    },
    {
      id: 4,
      icon: '/images/HomePage/grid_icon4.svg',
      title: 'Project Management Support',
      description: 'Our developers specialize in automation and open-source frameworks to reduce licensing costs.'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      image: '/images/img_ellipse_1.png',
      name: 'Mr. Antony Thilak Arulswamy – Founder & Director',
      description: '18+ years in AI, Automation, Software Architecture & Strategy.'
    },
    {
      id: 2,
      image: '/images/img_ellipse_1.png',
      name: 'Mr. Suresh A – Strategic & Managing Partner',
      description: 'Leads operations, growth, and delivery strategy for client projects.'
    }
  ];

  return (
    <div className="bg-global-3 flex flex-col items-center w-full">
      <Header />
      
      <main className="flex flex-col gap-8 sm:gap-12 lg:gap-[48px] items-center w-full mt-4 sm:mt-6 lg:mt-[20px] mx-4 sm:mx-6 lg:mx-[26px]">
        {/* Hero Section */}
        <section className="w-full">
<div
  className=" bg-[url('/images/HomePage/banner-img.png')] bg-cover bg-center rounded-lg p-4 sm:p-6 lg:p-[28px] w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
              <div className="flex flex-col items-start w-full lg:w-[44%] mb-6 lg:mb-0 lg:mt-[118px]">
                <h1 className="text-white font-ibm-plex font-medium text-xl sm:text-2xl lg:text-[30px] leading-7 sm:leading-8 lg:leading-[39px] w-full sm:w-3/4 lg:w-1/2 mb-3 sm:mb-4 lg:mb-[10px]">
                  Custom Software Solutions & Services
                </h1>
                <p className="text-white font-ibm-plex font-medium text-sm sm:text-base lg:text-[18px] leading-5 sm:leading-6 lg:leading-[23px] w-full lg:w-[94%] mb-6 sm:mb-8 lg:mb-[46px]">
                  Transform your business with cutting-edge technology solutions designed to drive growth and efficiency.
                </p>
                <Button 
                  variant="primary" 
                  size="medium"
                  className="px-3 sm:px-4 lg:px-[18px] py-1 sm:py-2 lg:py-[4px]"
                >
                  Learn More
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-[56px]">
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] items-center w-full lg:w-[44%] mb-8 sm:mb-12 lg:mb-[94px]">
            <h2 className="text-global-1 font-ibm-plex font-medium text-xl sm:text-2xl lg:text-[30px] leading-7 sm:leading-8 lg:leading-[39px]">
              About Us
            </h2>
            <p className="text-global-1 font-inter font-medium text-xs sm:text-sm lg:text-[14px] leading-4 sm:leading-5 lg:leading-[16px] text-center">
              Welcome to PYSELLERS SERVICES PRIVATE LIMITED, an IT Software Company
              
              PYSELLERS has been in the software business in India since 2024
              <br />
              We have extensive industry experience
              
              What makes PYSELLERS unique is our ability to help clients tackle their challenges.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[64px] w-full mb-6 sm:mb-8 lg:mb-[34px]">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-global-4 border border-[#bcbcbc] rounded-[10px] p-4 sm:p-5 lg:p-[20px] flex flex-col items-center text-center"
              >
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[52px] lg:h-[52px] mb-4 sm:mb-5 lg:mb-[20px]"
                />
                <h3 className="text-global-1 font-inter font-medium text-base sm:text-lg lg:text-[21px] leading-5 sm:leading-6 lg:leading-[25px] mb-4 sm:mb-6 lg:mb-[34px] text-center">
                  {service.title}
                </h3>
                <p className="text-global-1 font-inter font-normal text-xs sm:text-sm lg:text-[15px] leading-4 sm:leading-5 lg:leading-[18px] text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-global-1 font-ibm-plex font-medium text-sm sm:text-base lg:text-[17px] leading-5 sm:leading-6 lg:leading-[22px] text-center w-full">
            PySellers Services (OPC) Private Limited is a next-generation technology and consulting company focused on delivering AI-powered business solutions, automation tools, and cloud-based innovations. We specialize in transforming business needs into scalable, intelligent products using AI, Data Science, and Full-Stack Development.
          </p>
        </section>

        {/* Our Core Team Section */}
        <section className="w-full">
          <div className="bg-global-2 px-4 sm:px-6 lg:px-[52px] py-8 sm:py-12 lg:py-[60px] flex flex-col gap-6 sm:gap-8 lg:gap-[42px] items-center w-full">
            <h2 className="text-global-1 font-inter font-medium text-xl sm:text-2xl lg:text-[30px] leading-7 sm:leading-8 lg:leading-[37px] text-center">
              Our Core Team
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[64px] w-full justify-center items-center lg:items-start">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-global-5 border border-[#bcbcbc] rounded-[10px] p-2 sm:p-3 lg:p-[4px] flex flex-col sm:flex-row items-center gap-4 w-full max-w-md lg:max-w-none lg:w-auto"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] rounded-full object-cover ml-0 sm:ml-2 lg:ml-[10px]"
                  />
                  <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[12px] items-center sm:items-start text-center sm:text-left flex-1">
                    <h3 className="text-global-1 font-ibm-plex font-medium text-base sm:text-lg lg:text-[23px] leading-6 sm:leading-7 lg:leading-[29px]">
                      {member.name}
                    </h3>
                    <p className="text-global-1 font-ibm-plex font-normal text-sm sm:text-base lg:text-[18px] leading-5 sm:leading-6 lg:leading-[23px]">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;