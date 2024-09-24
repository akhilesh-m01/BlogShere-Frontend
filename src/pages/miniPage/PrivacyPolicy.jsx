import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white text-primary container mx-auto mt-8 md:px-24 p-8">
      <h2 className="md:text-4xl text-3xl font-medium md:leading-tight pt-8 pb-5">
        Privacy Policy
      </h2>

      <div className="space-y-6">
          <p>
              At Blogsphere, accessible from{" "}
              <a href="/" className="text-blue-400 underline">
                  https://blogsphere.com/
              </a>
              , your privacy is one of our top priorities. This Privacy Policy outlines the types of information we collect, how we use it, and your rights regarding your data.
          </p>
          <p>
              If you have any questions or need further information about our Privacy Policy, please feel free to contact us.
          </p>
          <p>
              This Privacy Policy applies solely to our online activities and is valid for visitors to our website concerning the information they share and/or collect on Blogsphere. It does not apply to any information collected offline or through channels other than this website.
          </p>
      </div>


      <div className="space-y-6 pt-5">
          <h3 className="text-2xl font-medium">Consent</h3>
          <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h3 className="text-2xl font-medium">Information We Collect</h3>
          <p>
              The personal information that you are asked to provide and the reasons for which you are asked will be made clear at the point we request your information.
          </p>
          <p>
              If you contact us directly, we may receive additional information about you, including your name, email address, phone number, the contents of your message, and any attachments you may send us, as well as any other information you choose to provide.
          </p>
          <p>
              When you register for an account on Blogsphere, we may ask for your contact information, including details such as your name, company name, address, email address, and telephone number.
          </p>
      </div>


      <div className="space-y-6 pt-5">
          <h3 className="text-2xl font-medium">How We Use Your Information</h3>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-8">
              <li>Provide, operate, and maintain our website</li>
              <li>Enhance, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new features, products, and services</li>
              <li>
                  Communicate with you directly or through our partners, including for customer service, 
                  <br />
                  to provide updates and information related to Blogsphere, and for marketing and promotional purposes
              </li>
              <li>Send you newsletters and other emails</li>
              <li>Identify and prevent fraud</li>
          </ul>
      </div>


      <div className="space-y-6 pt-5">
          <h3 className="text-2xl font-medium">Log Files</h3>
          <p>
              **Blogsphere** follows a standard procedure of using log files. These files log visitors when they visit our website. All hosting companies do this as part of their hosting services’ analytics. The information collected by log files includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring/exit pages, and possibly the number of clicks. This data is not linked to any personally identifiable information. The purpose of this information is to analyze trends, administer the site, track users’ movement on the website, and gather demographic information.
          </p>

          <h3 className="text-2xl font-medium">Cookies and Web Beacons</h3>
          <p>
              Like many other websites, Blogsphere uses cookies. These cookies are used to store information, including visitors’ preferences and the pages on our website that the visitor accessed or visited. The information collected is used to optimize the user experience by customizing our web page content based on visitors’ browser type and other information.
          </p>

          <h3 className="text-2xl font-medium">Our Advertising Partners</h3>
          <p>
              Some advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has its own Privacy Policy concerning user data. For your convenience, we have hyperlinked their Privacy Policies below.
          </p>
      </div>

    </section>
  );
};

export default PrivacyPolicy;
