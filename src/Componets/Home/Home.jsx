import React from "react";

import Banner from "../Banner/Banner.jsx";
import LatestResolvedIssues from "../LatestResolvedIssues/LatestResolvedIssues.jsx";
import Features from "../Features/Features.jsx";
import HowItWorks from "../HowItWorks/HowItWorks.jsx";
import ExtraSection1 from "../ExtraSection1/ExtraSection1.jsx";
import ExtraSection2 from "../ExtraSection2/ExtraSection2.jsx";

const Home = () => {
  return (
    <div className="pt-20"> 
      {/* Adding padding-top so Navbar doesn’t overlap on small devices */}

      {/* Banner Section */}
      <Banner />

      {/* Latest Resolved Issues */}
      <section className="container mx-auto px-4 my-16">
        <LatestResolvedIssues />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 my-16">
        <Features />
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 my-16">
        <HowItWorks />
      </section>

      {/* Extra Sections */}
      <section className="container mx-auto px-4 my-16">
        <ExtraSection1 />
      </section>

      <section className="container mx-auto px-4 my-16">
        <ExtraSection2 />
      </section>

    </div>
  );
};

export default Home;
