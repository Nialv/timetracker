import Navbar from "@components/layout/Navbar";
import MainContent from "@components/layout/MainContent";
import ReportForm from "@components/ReportForm";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <MainContent />
        <ReportForm />
      </div>
    </div>
  );
};

export default HomePage;
