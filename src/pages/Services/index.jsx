import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/ui/Button';

const Service = () => {
  const services = [
    {
      id: 1,
      icon: '/images/ServicePage/grid_icon1.svg',
      title: 'Application Development',
      description: 'Build powerful, scalable mobile and web applications that deliver exceptional user experiences and drive business growth.',
      features: [
        'Cross-platform mobile apps',
        'Progressive web applications',
        'Native iOS & Android development'
      ]
    },
    {
      id: 2,
      icon: '/images/ServicePage/grid_icon2.svg',
      title: 'IT Consultancy',
      description: 'Strategic technology consulting to optimize your IT infrastructure and accelerate digital transformation initiatives.',
      features: [
        'Technology strategy planning',
        'Infrastructure assessment',
        'Digital transformation roadmaps'
      ]
    },
    {
      id: 3,
      icon: '/images/ServicePage/grid_icon3.svg',
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions designed to meet your unique business requirements and operational challenges.',
      features: [
        'Enterprise software development',
        'Legacy system modernization',
        'API development & integration'
      ]
    },
    {
      id: 4,
      icon: '/images/ServicePage/grid_icon4.svg',
      title: 'Project Management Support',
      description: 'Streamline your business processes with intelligent automation that reduces costs and improves efficiency.',
      features: [
        'Process automation',
        'Workflow optimization',
        'AI-powered solutions'
      ]
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'Understanding your business needs and requirements'
    },
    {
      number: '2',
      title: 'Planning',
      description: 'Creating detailed project roadmaps and timelines'
    },
    {
      number: '3',
      title: 'Development',
      description: 'Building solutions with cutting-edge technologies'
    },
    {
      number: '4',
      title: 'Delivery',
      description: 'Deploying and supporting your solutions'
    }
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full bg-[linear-gradient(180deg,#e6f0fa_0%,_#ffffff_100%)]">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full mt-5 mx-6 bg-cover bg-center bg-no-repeat px-4 sm:px-14 py-16 sm:py-[108px]"
        style={{ backgroundImage: "url('/images/ServicePage/banner-img.png')" }}
      >
        <div className="flex justify-center items-end w-full">
          <div className="flex flex-col gap-3 sm:gap-[14px] justify-start items-center w-full sm:w-[60%] mt-32 sm:mt-[228px]">
            <h1 className="text-2xl sm:text-[40px] font-bold font-ibm-plex text-global-2 leading-tight sm:leading-[52px] text-center">
              Our Services
            </h1>
            <p className="text-base sm:text-xl font-bold font-ibm-plex text-global-2 leading-6 sm:leading-[26px] text-center w-full">
              Comprehensive IT solutions designed to transform your business and drive digital innovation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full mt-16 sm:mt-[118px] px-4 sm:px-[118px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-global-1 border border-[#bcbcbc] rounded-[10px] p-4 sm:p-5"
            >
              <div className="flex flex-col justify-start items-start w-full">
                {/* Icon */}
                <div className="bg-global-2 border border-[#bcbcbc] rounded-[5px] p-3 mb-8 sm:mb-[58px]">
                  <img 
                    src={service.icon} 
                    alt={`${service.title} icon`}
                    className="w-8 h-8 sm:w-auto sm:h-auto"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[25px] font-medium font-ibm-plex text-global-1 leading-8 sm:leading-[33px] text-center mb-2 sm:mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg font-normal font-ibm-plex text-global-1 leading-6 sm:leading-[23px] text-left w-full mb-6 sm:mb-9 ml-0 sm:ml-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex justify-start items-start w-full mb-4 sm:mb-4 ml-0 sm:ml-2">
                  <div className="flex flex-col gap-6 sm:gap-[30px] justify-start items-center w-auto mt-3">
                    {service.features.map((_, index) => (
                      <img 
                        key={index}
                        src="/images/ServicePage/grid_tick_icon.svg" 
                        alt="bullet point"
                        className="w-[18px] h-3"
                      />
                    ))}
                  </div>
                  <div className="ml-1">
                    <p className="text-base sm:text-lg font-normal font-ibm-plex text-global-1 leading-10 sm:leading-[43px] text-left">
                      {service.features.join('\n')}
                    </p>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="mt-4 sm:mt-4">
                  <Button variant="primary" size="medium">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full mt-20 sm:mt-[144px] px-4 sm:px-14">
        <div className="flex justify-start items-center w-full">
          <div className="flex flex-col gap-8 sm:gap-[36px] justify-start items-center w-full mx-1">
            {/* Section Header */}
            <div className="flex flex-col gap-3 justify-start items-center w-auto">
              <h2 className="text-2xl sm:text-[35px] font-semibold font-ibm-plex text-global-1 leading-10 sm:leading-[46px] text-left">
                Our Process
              </h2>
              <p className="text-base sm:text-lg font-medium font-ibm-plex text-global-1 leading-6 text-left">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            {/* Process Steps */}
            <div className="flex flex-col sm:flex-row justify-start items-center w-full">
              {/* First Description */}
              <p className="text-sm sm:text-base font-normal font-ibm-plex text-global-1 leading-5 text-center w-full sm:w-[22%] self-end mb-4 sm:mb-0 order-2 sm:order-1">
                Understanding your business needs and requirements
              </p>

              {/* Steps Container */}
              <div className="flex flex-col gap-3 justify-start items-start w-full sm:w-auto ml-0 sm:ml-[-206px] order-1 sm:order-2">
                {/* Step Numbers */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[260px] w-full">
                  {processSteps.map((step) => (
                    <div key={step.number} className="flex flex-col gap-3 justify-start items-center w-full sm:w-auto">
                      <div className="bg-global-1 rounded-[40px] w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center">
                        <span className="text-2xl sm:text-[30px] font-medium font-ibm-plex text-global-1 leading-10">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-medium font-ibm-plex text-global-1 leading-7 text-left">
                        {step.title}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Step Descriptions */}
                <div className="flex flex-col sm:flex-row justify-end items-center w-full gap-4 sm:gap-0">
                  <p className="text-sm sm:text-base font-normal font-ibm-plex text-global-1 leading-5 text-center w-full sm:w-[30%]">
                    Creating detailed project roadmaps and timelines
                  </p>
                  <p className="text-sm sm:text-base font-normal font-ibm-plex text-global-1 leading-5 text-center w-full sm:w-[26%] sm:ml-[30px]">
                    Building solutions with cutting-edge technologies
                  </p>
                  <p className="text-sm sm:text-base font-normal font-ibm-plex text-global-1 leading-5 text-center w-full sm:w-[22%] sm:ml-[30px]">
                    Deploying and supporting your solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service;