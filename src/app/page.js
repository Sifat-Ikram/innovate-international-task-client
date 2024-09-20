import Banner from "@/components/Banner";
import DiscoverMore from "@/components/DiscoverMore";
import ExploreNow from "@/components/ExploreNow";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import SignUpSection from "@/components/SignUpSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SignUpSection />
      <ExploreNow />
      <Overview />
      <DiscoverMore />
    </div>
  );
};

export default Home;
