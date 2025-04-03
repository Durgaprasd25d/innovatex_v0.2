import  Helmet  from "react-helmet";
import "./admin.css";

const RootLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Hackathon Admin Dashboard</title>
        <meta name="description" content="Admin dashboard for managing hackathon team registrations" />
      </Helmet>
      <div className="bg-gray-900 text-gray-100 min-h-screen">{children}</div>
    </>
  );
};

export default RootLayout;
