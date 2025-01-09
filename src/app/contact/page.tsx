import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact_Us</title>
      </Head>

      <div>
        <header>
          <h1>Contact Us</h1>
          <hr />
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
              Mobile Number: <a href="tel:+27836485767">+27 83 648 5767</a>
            </p>
          </section>
          <section>
            <h3>Email</h3>
            <p>
              General Inquiries:
              <a href="mailto:lelethu.bobo@gmail.com">lelethu.bobo@gmail.com</a>
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
