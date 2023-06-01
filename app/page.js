import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <section id="hero">
        <div className="section-container mb-40 pt-16">
          <img src="/images/logo.svg" alt="" className="mx-auto my-16" />
          <h3>A history of everything you copy</h3>
          <p className="max-w-3xl mb-10 mx-auto font-sans text-3xl text-grayishBlue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          {/* Button Container */}
          <div className="button-container">
            <a className="bg-strongCyan p-4 px-8 rounded-3xl duration-200 hover:opacity-80 cursor-pointer">
              Download for iOS
            </a>
            <a className="bg-lightBlue p-4 px-8 rounded-3xl duration-200 hover:opacity-80 cursor-pointer">
              Download for Mac
            </a>
          </div>
        </div>
      </section>
      {/* Snippets */}
      <section id="snippets">
        <div className="section-container my-20">
          <h3>Keep track of your snippets</h3>
          <p className="max-w-3xl mx-auto mb-24 leading-9">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>
      {/* Features Section */}
      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row space-y-16 md:space-x-32">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="/images/image-computer.png"
                alt=""
                className="md:absolute top-0 right-[50%]"
              />
            </div>
            {/* Items Container */}
            <div className="flex flex-col items-center mt-16 mb-24 space-y-16 text-xl md:w-[50%] md:mb-60 md:text-left md:pl-16 ">
              {/* Item 1 */}
              <div>
                <h5 className="mb-2">Quick Search</h5>
                <p>
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              {/* Item 2 */}
              <div>
                <h5 className="mb-2">iCloud Sync</h5>
                <p>
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              {/* Item 3 */}
              <div>
                <h5 className="mb-2">Complete History</h5>
                <p>
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Anywhere Section */}
      <section>
        <div className="section-container my-40">
          <h3>Access Clipboard Anywhere</h3>
          <p className="mb-24 leading-9">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src="/images/image-devices.png" alt="" className="mx-auto" />
        </div>
      </section>
      {/* Supercharge Section */}
      <section>
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="mb-16 leading-9 text-center max-w-3xl">
            We&apos;ve got the tools to boost your productivity.
          </p>
          {/* Items Container */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="/images/icon-blacklist.svg" alt="" className="mb-6" />
              <h5>Create blacklists</h5>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="/images/icon-text.svg" alt="" className="mb-6" />
              <h5>Create blacklists</h5>
              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="/images/icon-preview.svg" alt="" className="mb-6" />
              <h5>Sneak Preview</h5>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      {/* References Section */}
      <section>
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="images/logo-google.png" alt="" />
          <img src="images/logo-ibm.png" alt="" />
          <img src="images/logo-microsoft.png" alt="" />
          <img src="images/logo-hp.png" alt="" />
          <img src="images/logo-vector-graphics.png" alt="" />
        </div>
      </section>
      {/* Bottom Call to Action */}
      <section>
        <div className="section-container mb-40 pt-16">
          <h3>Clipboard for iOS and MacOS</h3>
          <p className="max-w-3xl mb-10 mx-auto font-sans text-3xl text-grayishBlue">
            Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you&apos;re ready to start adding to your clipboard.
          </p>
          {/* Button Container */}
          <div className="button-container">
            <a className="bg-strongCyan p-4 px-8 rounded-3xl duration-200 hover:opacity-80 cursor-pointer">
              Download for iOS
            </a>
            <a className="bg-lightBlue p-4 px-8 rounded-3xl duration-200 hover:opacity-80 cursor-pointer">
              Download for Mac
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img src="images/logo.svg" alt="" className="scale-50" />
            {/* Container for menus and socials */}
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              {/* Menus */}
              <div className="flex flex-col space-y-4 md:text-left md:flex-row md:space-y-0 md:space-x-24 md:ml-24">
                <div className="flex flex-col space-y-4">
                  <a href="#" className="hover:text-strongCyan">FAQs</a>
                  <a href="#" className="hover:text-strongCyan">Contact Us</a>
                </div>
                <div className="flex flex-col space-y-4">
                  <a href="#" className="hover:text-strongCyan">Privacy Policy</a>
                  <a href="#" className="hover:text-strongCyan">Press Kit</a>
                </div>
                <a href="#" className="hover:text-strongCyan">Install Guide</a>
              </div>
              {/* Socials */}
              <div className="flex justify-between items-center w-32 py-1">
                <a href="#"><img src="images/icon-facebook.svg" className="ficon"  /></a>
                <a href="#" className="ficon"><img src="images/icon-twitter.svg"  /></a>
                <a href="#" className="ficon"><img src="images/icon-instagram.svg"  /></a>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
