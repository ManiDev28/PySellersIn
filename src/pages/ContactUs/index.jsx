import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/ui/Button';
import EditText from '../../components/common/ui/EditText';
import TextArea from '../../components/common/ui/TextArea';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    {try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    }}


    //e.preventDefault();
    //console.log('Form submitted:', formData);
    // Handle form submission logic here
    //below commented is DB PoC
    {/*
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    }
      */}

  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#e6f0fa_0%,_#ffffff_100%)]">
      <Header />
      
      <main className="flex flex-col justify-start items-center w-full px-4 sm:px-6 lg:px-[26px]">
        {/* Hero Contact Section */}
        <div className="w-full mt-5 mb-20">
          <img 
            src="/images/ContactPage/banner-img.jpg" 
            alt="Contact Us" 
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[562px] object-cover rounded-lg"
          />
        </div>

        {/* Contact Information Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 lg:gap-[170px] w-full max-w-6xl mb-16">
          {/* Our Address */}
          <div className="flex flex-col justify-start items-center w-full lg:w-[202px]">
            <div className="flex justify-center items-center w-20 h-20 bg-global-1 rounded-full mb-4">
              <img 
                src="/images/ContactPage/grid_icon1.svg" 
                alt="Location" 
                className="w-8 h-[46px]"
              />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-[25px] font-medium leading-8 text-global-1 mb-1 font-ibm-plex-sans">
              Our Address
            </h3>
            <p className="text-base sm:text-lg font-normal leading-6 text-global-1 text-center font-ibm-plex-sans">
              123 Tech Street Innovation District San Francisco, CA 94105
            </p>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col justify-start items-center w-full lg:w-[268px] gap-2">
            <div className="flex justify-center items-center w-20 h-20 bg-global-1 rounded-full">
              <img 
                src="/images/ContactPage/grid_icon2.svg" 
                alt="Phone" 
                className="w-8 h-8"
              />
            </div>
            <div className="flex flex-col gap-1 justify-start items-center w-full">
              <h3 className="text-xl sm:text-2xl lg:text-[25px] font-medium leading-8 text-global-1 font-ibm-plex-sans">
                Phone Number
              </h3>
              <p className="text-base sm:text-lg font-normal leading-6 text-global-1 text-center font-ibm-plex-sans">
                +1 (555) 123-4567 Mon - Fri: 9:00 AM - 6:00 PM PST
              </p>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col justify-start items-center w-full lg:w-auto">
            <div className="flex justify-center items-center w-20 h-20 bg-global-1 rounded-full mb-4">
              <img 
                src="/images/ContactPage/grid_icon3.svg" 
                alt="Email" 
                className="w-8 h-[26px]"
              />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-[25px] font-medium leading-8 text-global-1 mb-1 font-ibm-plex-sans">
              Email Address
            </h3>
            <p className="text-base sm:text-lg font-normal leading-6 text-global-1 text-center font-ibm-plex-sans">
              hello@techsolutions.com support@techsolutions.com
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full bg-global-1 rounded-[14px] p-6 sm:p-8 lg:p-10 mb-16">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-11 justify-start items-center w-full max-w-5xl mx-auto">
            {/* Form Header */}
            <div className="flex flex-col gap-4 sm:gap-[18px] justify-start items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium leading-10 text-global-1 text-center font-ibm-plex-sans">
                Send Us a Message
              </h2>
              <p className="text-base sm:text-lg font-normal leading-6 text-global-1 text-center font-ibm-plex-sans">
                Fill out the form below and we will get back to you within 24 hours
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-0 w-full">
                {/* Left Column - Form Fields */}
                <div className="flex flex-col justify-start items-start w-full lg:w-[42%] lg:pr-8">
                  {/* First Name */}
                  <label className="text-xl sm:text-2xl lg:text-[25px] font-normal leading-8 text-global-1 mb-1 font-ibm-plex-sans">
                    First Name *
                  </label>
                  <EditText
                    value={formData.firstName}
                    onChange={handleInputChange('firstName')}
                    placeholder="Ex, John"
                    className="w-full border border-global-1 rounded-[20px] bg-global-2 text-global-2 px-4 sm:px-[18px] py-1.5 sm:py-[6px] text-lg sm:text-[20px] font-normal leading-7 ml-3 mt-1 font-open-sans"
                    fullWidth
                  />

                  {/* Phone */}
                  <label className="text-xl sm:text-2xl lg:text-[25px] font-normal leading-8 text-global-1 mb-1 mt-6 sm:mt-10 font-ibm-plex-sans">
                    Phone *
                  </label>
                  <EditText
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    placeholder="Enter Your Phone Number"
                    className="w-full border border-global-1 rounded-[20px] bg-global-2 text-global-2 px-4 sm:px-[18px] py-1.5 sm:py-[6px] text-lg sm:text-[20px] font-normal leading-7 ml-3 mt-2.5 font-open-sans"
                    fullWidth
                  />

                  {/* Email */}
                  <label className="text-xl sm:text-2xl lg:text-[25px] font-normal leading-8 text-global-1 mb-1 mt-6 sm:mt-[18px] font-ibm-plex-sans">
                    Email *
                  </label>
                  <EditText
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    placeholder="Enter Your Phone Number"
                    type="email"
                    className="w-full border border-global-1 rounded-[20px] bg-global-2 text-global-2 px-4 sm:px-[18px] py-1.5 sm:py-[6px] text-lg sm:text-[20px] font-normal leading-7 ml-3 mt-2.5 font-open-sans"
                    fullWidth
                  />
                </div>

                {/* Right Column - Message */}
                <div className="flex flex-col gap-1 justify-start items-start w-full lg:w-[58%]">
                  <label className="text-xl sm:text-2xl lg:text-[25px] font-normal leading-8 text-global-1 mb-1 lg:ml-[90px] font-ibm-plex-sans">
                    Message *
                  </label>
                  <TextArea
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    placeholder="Ex, John"
                    rows={8}
                    className="w-full lg:w-[84%] lg:self-end border border-global-1 rounded-[20px] bg-global-2 text-global-2 p-3 text-lg sm:text-[20px] font-normal leading-7 font-open-sans"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
                <Button
                  type="submit"
                  className="bg-global-3 text-global-3 rounded-[10px] px-6 sm:px-8 lg:px-[34px] py-1 sm:py-[4px] text-base sm:text-lg font-medium leading-6 font-inter"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Find Our Office Section */}
        <div className="flex flex-col justify-start items-center w-full mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-medium leading-12 text-global-1 text-center mb-2 font-ibm-plex-sans">
            Find Our Office
          </h2>
          <p className="text-base sm:text-lg font-normal leading-6 text-global-1 text-center mb-8 font-ibm-plex-sans">
            Located in the heart of Chennai Innovation District
          </p>
          
          {/* Map */}
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[504px] rounded-lg overflow-hidden">
            <iframe
              title="Office Location Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.2707,13.0827,80.2707,13.0827&layer=mapnik&marker=13.0827,80.2707"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Office Hours Section */}
        <div className="flex flex-col justify-start items-center w-full px-4 sm:px-6 lg:px-14 mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-medium leading-12 text-global-1 text-center mb-2 font-ibm-plex-sans">
            Office Hours
          </h2>
          <p className="text-base sm:text-lg font-normal leading-6 text-global-1 text-center mb-8 font-ibm-plex-sans">
            When you can reach us
          </p>

          {/* Hours Cards */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[78px] w-full max-w-5xl">
            {/* Business Hours */}
            <div className="flex flex-col gap-4 justify-center items-start w-full lg:w-[474px] bg-global-1 border border-[#bcbcbc] rounded-[14px] p-4 sm:p-[18px]">
              <h3 className="text-lg sm:text-xl font-medium leading-7 text-global-1 font-ibm-plex-sans">
                Business Hours
              </h3>
              <div className="text-base sm:text-lg font-normal leading-8 text-global-1 font-ibm-plex-sans">
                <div className="flex justify-between mb-2">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="flex flex-col gap-2 justify-start items-start w-full lg:w-[462px] bg-global-1 border border-[#bcbcbc] rounded-[14px] p-4 sm:p-4">
              <h3 className="text-lg sm:text-xl font-medium leading-7 text-global-1 font-ibm-plex-sans">
                Support Hours
              </h3>
              <div className="text-base sm:text-lg font-normal leading-8 text-global-1 font-ibm-plex-sans">
                <div className="flex justify-between mb-2">
                  <span>Emergency</span>
                  <span>Support24/7</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Email Response</span>
                  <span>Within 4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone Support</span>
                  <span>Business hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;