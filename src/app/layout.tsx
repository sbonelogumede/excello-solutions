import "./globals.css";

export const metadata = {
  title: "Excello",
  description: "Excello application",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/apply">Apply</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        {/* <footer>
          <p>
            &copy; 2024 by Sbonelo Gumede |
            <a href="mailto:gmdsbo@gmail.com"> gmdsbo@gmail.com </a>
          </p>
          <ul className="socials">
            <li>
              <a href="https://wa.me/qr/RM3XPRNHQ7SIC1" target="_blank">
                <img src="/images/Whatsapp.png" alt="My Whatsapp contact" />
              </a>
            </li>
            <li>
              <a href="https:linkedin.com/in/sbonelogumede" target="_blank">
                <img src="/images/LinkedIn.png" alt="My LinkedIn account" />
              </a>
            </li>
          </ul>
        </footer> */}
        <footer>
          <p>
            &copy; 2024 by Sbonelo Gumede |
            <a href="mailto:gmdsbo@gmail.com"> gmdsbo@gmail.com </a>
          </p>
          <ul className="socials">
            <li>
              <a href="https://wa.me/qr/RM3XPRNHQ7SIC1" target="_blank">
                <img src="/images/Whatsapp.png" alt="My Whatsapp contact" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/sbonelogumede" target="_blank">
                <img src="/images/LinkedIn.png" alt="My LinkedIn account" />
              </a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
