import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact_Us</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="content-wrapper">
        <div className="content-bg">
          <header>
            <h1>Contact Us</h1>
          </header>

          <main>
            <section>
              <h3>Get in Touch</h3>
              <p>
                We’re here to help! Reach out to us via the following channels:
              </p>
            </section>
            <section>
              <h3>Phone and WhatsApp</h3>
              <p>
                Number: <a href="tel:+27836485767">+27 83 648 5767</a>
              </p>
            </section>
            <section>
              <h3>Email</h3>
              <p>
                General Inquiries:{" "}
                <a href="mailto:excellosolutions@gmail.com">
                  ExcelloSolutions@gmail.com
                </a>
              </p>
            </section>
            <section>
              <h3>Instagram</h3>
              <p>
                Username:{" "}
                <a href="https://www.instagram.com/lelethu_bobo/">
                  Lelethu_Bobo
                </a>
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
