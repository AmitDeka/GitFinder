function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container px-4 mx-auto py-2 bg-accent/40 dark:bg-accent/50">
      <div className="mx-auto max-w-screen-lg flex justify-between">
        <p className="text-center font-sourceSans">&copy; {year} Git Finder.</p>
        <p className="text-center font-sourceSans">Made with ♥️ in India</p>
      </div>
    </footer>
  );
}
export default Footer;
