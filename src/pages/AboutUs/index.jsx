import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const AboutUs = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '2', label: 'Years Experience' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Antony Thilak Arulswamy – Founder & Director',
      experience: '18+ years in AI, Automation, Software Architecture & Strategy.',
      image: '/images/img_ellipse_1.png'
    },
    {
      id: 2,
      name: 'Mr. Suresh A – Strategic & Managing Partner',
      experience: 'Leads operations, growth, and delivery strategy for client projects.',
      image: '/images/img_ellipse_1.png'
    },
    {
      id: 3,
      name: 'Mr. Antony Thilak Arulswamy – Founder & Director',
      experience: '18+ years in AI, Automation, Software Architecture & Strategy.',
      image: '/images/img_ellipse_1.png'
    },
    {
      id: 4,
      name: 'Mr. Antony Thilak Arulswamy – Founder & Director',
      experience: '18+ years in AI, Automation, Software Architecture & Strategy.',
      image: '/images/img_ellipse_1.png'
    }
  ];

  const coreValues = [ {
      icon: '/images/AboutUs/core_val1.svg',
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    },
    {
      icon: '/images/AboutUs/core_val2.svg',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.'
    },
    {
      icon: '/images/AboutUs/core_val3.svg',
      title: 'Excellence',
      description: 'We strive for the highest quality in every project, exceeding client expectations consistently.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f0fa] to-[#ffffff]">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full bg-cover bg-center bg-no-repeat mt-5"
        style={{ backgroundImage: "url('/images/AboutUs/banner-img.png')" }}
      >
        <div className="w-full max-w-[1388px] mx-auto px-4 sm:px-6 lg:px-14 py-24 sm:py-32 lg:py-[148px]">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-8 mt-16 sm:mt-20 lg:mt-[106px] ml-0 sm:ml-4 lg:ml-[36px]">
            <p className="text-base sm:text-lg lg:text-[20px] font-medium font-ibm-plex text-global-2 leading-6 lg:leading-[26px]">
              About PYSELLERS
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-medium font-ibm-plex text-global-2 leading-8 sm:leading-10 lg:leading-[49px] w-full lg:w-[54%]">
              Discover our journey, mission, and the passionate team behind TechSolutions
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full max-w-[1388px] mx-auto px-4 sm:px-6 lg:px-14 py-12 sm:py-16 lg:py-14 mt-8 sm:mt-12 lg:mt-14">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-12">
          <div className="flex flex-col gap-3 lg:gap-3 w-full lg:flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-medium font-ibm-plex text-global-1 leading-10 lg:leading-[46px] text-center lg:text-left">
              Our Story
            </h2>
            <div className="ml-0 lg:ml-[10px]">
              <p className="text-base sm:text-lg lg:text-[18px] font-medium font-ibm-plex text-global-1 leading-6 lg:leading-[23px] w-full lg:w-[86%]">
                Welcome to PYSELLERS SERVICES PRIVATE LIMITED, an IT Software Company, with successful business partnerships with various IT startups in India. We are one of the fastest growing IT hob and office in Chennai, IndiaPYSELLERS has been in the software business in India since 2024. Our fast-growing client base proves our services are effective in the areas of IT solutions.
              </p>
              <br />
              <p className="text-base sm:text-lg lg:text-[18px] font-medium font-ibm-plex text-global-1 leading-6 lg:leading-[23px] w-full lg:w-[86%]">
                What makes PYSELLERS unique is our ability to help clients tackle their challenges. We help them enhance productivity by ensuring that their vital business functions work faster, cheaper, and better. Our ability to conceptualize plan and implement new and existing systems allows our clients to transform their existing legacy models to take their business to the next level.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end mr-0 lg:mr-[22px]">
            <img 
              src="/images/AboutUs/icon1.png" 
              alt="Our Story" 
              className="w-full max-w-[482px] h-auto lg:h-[432px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full max-w-[1388px] mx-auto px-4 sm:px-6 lg:px-14 py-12 sm:py-16 lg:py-0 mt-8 sm:mt-12 lg:mt-[104px]">
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-[130px]">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-[170px] w-full lg:w-[88%] mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col justify-start items-center text-center">
                <span className="text-2xl sm:text-3xl lg:text-[30px] font-medium font-ibm-plex text-global-1 leading-8 lg:leading-[39px]">
                  {stat.number}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-[30px] font-medium font-ibm-plex text-global-1 leading-8 lg:leading-[39px] mt-1 lg:mt-[-4px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Mission & Vision Cards */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-[98px] w-full lg:w-[90%] mx-auto">
            {/* Mission Card */}
            <div className="flex flex-col gap-4 lg:gap-5 justify-center items-start w-full lg:w-[550px] bg-global-3 border border-[#bcbcbc] rounded-[14px] p-4 sm:p-6 lg:p-[10px_12px_10px_12px]">
              <div className="bg-global-2 rounded-[5px] p-3 ml-0 lg:ml-[6px] mt-0 lg:mt-[5px]">
                <img 
                  src="/images/AboutUs/grid_icon1.svg" 
                  alt="Mission Icon" 
                  className="w-[52px] h-[50px]"
                />
              </div>
              <h3 className="text-lg lg:text-[20px] font-medium font-ibm-plex text-global-1 leading-6 lg:leading-[26px] text-center ml-0 lg:ml-[6px]">
                Our Mission
              </h3>
              <p className="text-sm lg:text-[15px] font-normal font-ibm-plex text-global-1 leading-5 lg:leading-[19px] text-center w-full">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation. We are committed to delivering exceptional value by understanding our clients unique challenges and crafting tailored solutions that exceed expectations.
              </p>
            </div>

            {/* Vision Card */}
            <div className="flex flex-col gap-4 lg:gap-5 justify-start items-start w-full lg:w-[550px] bg-global-3 border border-[#bcbcbc] rounded-[14px] p-4 sm:p-6 lg:p-[14px_10px_14px_10px]">
              <div className="bg-global-2 rounded-[5px] p-3 ml-0 lg:ml-[8px]">
                <img 
                  src="/images/AboutUs/grid_icon2.svg" 
                  alt="Vision Icon" 
                  className="w-[52px] h-[50px]"
                />
              </div>
              <h3 className="text-lg lg:text-[20px] font-medium font-ibm-plex text-global-1 leading-6 lg:leading-[26px] text-center ml-0 lg:ml-[8px]">
                Our Vision
              </h3>
              <p className="text-sm lg:text-[15px] font-normal font-ibm-plex text-global-1 leading-5 lg:leading-[19px] text-center w-full ml-0 lg:ml-[8px] mb-0 lg:mb-4">
                To be the leading technology partner for businesses seeking digital transformation. We envision a future where technology seamlessly integrates with business processes, enabling organizations to achieve their full potential and create lasting impact in their industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="w-full bg-global-1 mt-8 sm:mt-12 lg:mt-[38px]">
        <div className="w-full max-w-[1388px] mx-auto px-4 sm:px-6 lg:px-[52px] py-12 sm:py-16 lg:py-[60px]">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[42px] justify-start items-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium font-inter text-global-1 leading-8 lg:leading-[37px] text-center">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-[1270px] ml-0 lg:ml-[10px] mb-0 lg:mb-4">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className="flex flex-row justify-start items-center bg-global-3 border border-[#bcbcbc] rounded-[10px] p-2 lg:p-1"
                >
                  <div className="flex flex-row justify-start items-center w-full p-1 lg:p-1">
                    <img 
                      src={member.image} 
                      alt={`Team member ${member.id}`} 
                      className="w-[100px] h-[100px] rounded-[50px] ml-2 lg:ml-[10px]"
                    />
                    <div className="flex flex-col justify-start items-center w-full ml-4 lg:ml-0">
                      <h3 className="text-lg sm:text-xl lg:text-[23px] font-medium font-ibm-plex text-global-1 leading-6 sm:leading-7 lg:leading-[29px] text-center w-full">
                        {member.name}
                      </h3>
                      <p className="text-base sm:text-lg lg:text-[18px] font-normal font-ibm-plex text-global-1 leading-5 sm:leading-6 lg:leading-[23px] text-center w-full mt-2 lg:mt-3">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full max-w-[1388px] mx-auto px-4 sm:px-6 lg:px-14 py-12 sm:py-16 lg:py-0 mt-8 sm:mt-12 lg:mt-[94px]">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-[70px] justify-start items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-medium font-ibm-plex text-global-1 leading-10 lg:leading-[46px] text-center">
            Our Core Values
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[46px] justify-center items-center w-full lg:w-[96%]">
            {coreValues.map((value, index) => (
              <div key={index} className="flex flex-col gap-2 lg:gap-[10px] justify-start items-center w-full">
                <div className="bg-global-2 rounded-[5px] p-3">
                  <img 
                    src={value.icon} 
                    alt={`${value.title} Icon`} 
                    className="w-[52px] h-[50px]"
                  />
                </div>
                <div className="flex flex-col gap-1 lg:gap-[6px] justify-start items-center w-full">
                  <h3 className="text-xl sm:text-2xl lg:text-[25px] font-medium font-ibm-plex text-global-1 leading-7 lg:leading-[33px] text-center">
                    {value.title}
                  </h3>
                  <p className="text-base sm:text-lg lg:text-[18px] font-normal font-ibm-plex text-global-1 leading-6 lg:leading-[23px] text-center w-full">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;