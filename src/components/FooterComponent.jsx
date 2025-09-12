function FooterComponent() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} MakeUGC Clone | Built with ❤️
        </p>
      </div>
    </footer>
  );
}

export default FooterComponent;
