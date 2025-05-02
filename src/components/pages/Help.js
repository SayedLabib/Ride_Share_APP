import React, { useState } from 'react';
import '../layout/Footer.css';
import './Help.css';

const Help = () => {
  const [activeAccordion, setActiveAccordion] = useState('basic-heading-one-with-arrow-always-open');

  const toggleAccordion = (id) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <div className="help-container">
      <div className="help-header">
        <h1>Help Center</h1>
        <p>Find answers to your questions and get the support you need</p>
      </div>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full"
          >
            <div className="w-full lg:w-1/2">
              <img
                src="https://pagedone.io/asset/uploads/1696230182.png"
                alt="FAQ tailwind section"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-16">
                  <h6
                    className="text-lg text-center font-medium text-green-600 mb-2 lg:text-left"
                  >
                    faqs
                  </h6>
                  <h2
                    className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left"
                  >
                    Looking for answers?
                  </h2>
                </div>
                <div className="accordion-group">
                  {/* First accordion item */}
                  <div
                    className={`accordion pb-8 border-b border-solid border-gray-200 ${activeAccordion === 'basic-heading-one-with-arrow-always-open' ? 'active' : ''}`}
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-green-600"
                      onClick={() => toggleAccordion('basic-heading-one-with-arrow-always-open')}
                    >
                      <h5>How to create an account?</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hover:text-green-600 ${activeAccordion === 'basic-heading-one-with-arrow-always-open' ? 'rotate-180 text-green-600' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeAccordion === 'basic-heading-one-with-arrow-always-open' ? 'active' : ''}`}
                      style={{ maxHeight: activeAccordion === 'basic-heading-one-with-arrow-always-open' ? '200px' : '0px' }}
                    >
                      <p className="text-base font-normal text-gray-600 py-4">
                        To create an account, find the 'Sign up' or 'Create
                        account' button, fill out the registration form with your
                        personal information, and click 'Create account' or 'Sign
                        up.' Verify your email address if needed, and then log in
                        to start using the platform.
                      </p>
                    </div>
                  </div>
                  
                  {/* Second accordion item */}
                  <div
                    className={`accordion py-8 border-b border-solid border-gray-200 ${activeAccordion === 'basic-heading-two-with-arrow-always-open' ? 'active' : ''}`}
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-gray-600 w-full transition duration-500 hover:text-green-600"
                      onClick={() => toggleAccordion('basic-heading-two-with-arrow-always-open')}
                    >
                      <h5>Have any trust issue?</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hover:text-green-600 ${activeAccordion === 'basic-heading-two-with-arrow-always-open' ? 'rotate-180 text-green-600' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeAccordion === 'basic-heading-two-with-arrow-always-open' ? 'active' : ''}`}
                      style={{ maxHeight: activeAccordion === 'basic-heading-two-with-arrow-always-open' ? '200px' : '0px' }}
                    >
                      <p className="text-base text-gray-500 font-normal py-4">
                        We prioritize user safety and trust. Our platform verifies all drivers and riders, provides user reviews 
                        and ratings, and offers secure payment processing. You can view detailed profiles of travel companions before 
                        booking and use our in-app messaging for communication without sharing personal contact information.
                      </p>
                    </div>
                  </div>
                  
                  {/* Third accordion item */}
                  <div
                    className={`accordion py-8 border-b border-solid border-gray-200 ${activeAccordion === 'basic-heading-three-with-arrow-always-open' ? 'active' : ''}`}
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-green-600"
                      onClick={() => toggleAccordion('basic-heading-three-with-arrow-always-open')}
                    >
                      <h5>How can I reset my password?</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hover:text-green-600 ${activeAccordion === 'basic-heading-three-with-arrow-always-open' ? 'rotate-180 text-green-600' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeAccordion === 'basic-heading-three-with-arrow-always-open' ? 'active' : ''}`}
                      style={{ maxHeight: activeAccordion === 'basic-heading-three-with-arrow-always-open' ? '200px' : '0px' }}
                    >
                      <p className="text-base text-gray-500 font-normal py-4">
                        To reset your password, click on the "Forgot Password" link on the login page. 
                        Enter your registered email address, and we'll send you a password reset link. 
                        Click the link in your email, create a new password, and log in with your updated credentials. 
                        For security reasons, password reset links expire after 24 hours.
                      </p>
                    </div>
                  </div>
                  
                  {/* Fourth accordion item */}
                  <div
                    className={`accordion py-8 ${activeAccordion === 'basic-heading-four-with-arrow-always-open' ? 'active' : ''}`}
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-green-600"
                      onClick={() => toggleAccordion('basic-heading-four-with-arrow-always-open')}
                    >
                      <h5>What is the payment process?</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hover:text-green-600 ${activeAccordion === 'basic-heading-four-with-arrow-always-open' ? 'rotate-180 text-green-600' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeAccordion === 'basic-heading-four-with-arrow-always-open' ? 'active' : ''}`}
                      style={{ maxHeight: activeAccordion === 'basic-heading-four-with-arrow-always-open' ? '200px' : '0px' }}
                    >
                      <p className="text-base text-gray-500 font-normal py-4">
                        Our payment process is secure and convenient. When booking a ride, you can choose to pay with credit/debit cards, 
                        digital wallets, or through our in-app wallet. Payments are processed only after your ride is confirmed, and funds 
                        are held securely until the ride is completed. For drivers, earnings are transferred to your account within 1-2 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-support">
        <h2>Need more help?</h2>
        <p>Our support team is available 24/7 to assist you with any questions or concerns.</p>
        <button className="btn btn-primary">Contact Support</button>
      </div>
    </div>
  );
};

export default Help;