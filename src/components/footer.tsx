const Footer = () => {
  return (
    <footer className="text-white pb-8 pt-48 bg-gradient-to-b from-gray-950 to-blue-900">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Kartik Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
