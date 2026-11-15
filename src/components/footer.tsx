const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-8 text-sm text-subtle-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p>&copy; {new Date().getFullYear()} Kartik Patel</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
