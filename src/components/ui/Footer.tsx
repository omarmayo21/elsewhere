export const Footer = () => {
  return (
    <footer className="w-full bg-white px-site-gutter-mobile md:px-site-gutter py-16 mt-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="text-[13px] font-medium tracking-wide">
          <p className="mb-2">Address: 46 Ring Road, Second Block, Alexandria</p>
        </div>
        <div className="text-[13px] font-medium tracking-wide">
          <p className="mb-2">
            Email Address:{' '}
            <a href="mailto:sales@elsewhere-eg.net" className="hover:text-accent transition-colors">
              sales@elsewhere-eg.net
            </a>
          </p>
        </div>
        <div className="lg:col-span-2 text-left lg:text-right text-[13px] font-medium tracking-wide">
          <p>&copy; Copyright elsewhere {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};
