import React from 'react';

const Footer = () => {
  const serviceLinks = [
    'App Development',
    'IT Consultancy', 
    'Custom Software',
    'Automation'
  ];

  const companyLinks = [
    'About Us',
    'Contact',
    'Privacy Policy',
    'Terms of Service'
  ];

  return (
    <footer className="bg-global-6 px-4 sm:px-6 lg:px-[26px] py-6 sm:py-8 lg:py-[26px] mt-8 sm:mt-12 lg:mt-[38px] w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[34px]">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 w-full lg:w-[84%]">
            {/* Company Info */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[18px] w-full lg:w-[50%]">
              <h2 className="text-global-2 font-ibm-plex font-medium text-lg sm:text-xl lg:text-[21px] leading-6 sm:leading-7 lg:leading-[28px]">
                PYSELLERS
              </h2>
              <p className="text-global-2 font-ibm-plex font-normal text-sm sm:text-base lg:text-[16px] leading-5 sm:leading-6 lg:leading-[20px] w-full">
                Delivering innovative IT solutions that drive business growth and digital transformation.
              </p>
            </div>

            {/* Links Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-0 w-full lg:w-[44%]">
              {/* Services */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[14px] w-full sm:w-[72%]">
                <h3 className="text-global-2 font-ibm-plex font-medium text-lg sm:text-xl lg:text-[21px] leading-6 sm:leading-7 lg:leading-[28px]">
                  Services
                </h3>
                <ul className="flex flex-col gap-2 sm:gap-3 lg:gap-[12px]">
                  {serviceLinks.map((service, index) => (
                    <li key={index}>
                      <button className="text-global-2 font-ibm-plex font-normal text-sm sm:text-base lg:text-[17px] leading-5 sm:leading-6 lg:leading-[23px] hover:text-gray-300 transition-colors duration-200 text-left">
                        {service}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[14px] w-full sm:w-auto">
                <h3 className="text-global-2 font-ibm-plex font-medium text-lg sm:text-xl lg:text-[21px] leading-6 sm:leading-7 lg:leading-[28px]">
                  Company
                </h3>
                <ul className="flex flex-col gap-2 sm:gap-3 lg:gap-[12px]">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <button className="text-global-2 font-ibm-plex font-normal text-sm sm:text-base lg:text-[17px] leading-5 sm:leading-6 lg:leading-[23px] hover:text-gray-300 transition-colors duration-200 text-left">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="h-[1px] w-full lg:w-[1266px] bg-footer-1"></div>

          {/* Copyright */}
          <div className="flex justify-center">
            <p className="text-global-2 font-inter font-normal text-sm sm:text-base lg:text-[16px] leading-5 sm:leading-6 lg:leading-[20px] text-center">
              © 2025 Pysellers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;