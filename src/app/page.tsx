import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
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
            <h1>Excello Solutions</h1>
            <h2>Educational Consultant/Tutor</h2>
          </header>

          <main>
            <br></br>
            <section>
              <div className="summary">
                <div className="image-container">
                  <Image
                    src="/images/1.jpg"
                    alt="Summary image"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="text-container">
                  <h3>Summary</h3>
                  <p>
                    We are a dynamic education consulting firm dedicated to
                    bridging the gap between students and the working industry.
                    Our mission is to provide personalized tutoring and guidance
                    to high school and college students. Empowering students to
                    achieve academic excellence and successfully transition into
                    their chosen careers.
                  </p>
                </div>
              </div>
            </section>
            <br></br>
            <section>
              <div className="our-services">
                <div className="text-container">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      National Benchmark Test (NBT) Tutoring Sessions
                      <ul>
                        <li>- MAT: R950</li>
                        <li>- AQL & AL: R950</li>
                      </ul>
                    </li>
                    <li>
                      College Tutoring Sessions
                      <ul>
                        <li>- R650 per module per month</li>
                      </ul>
                    </li>
                    <li>
                      Applications
                      <ul>
                        <li>- University Applications: R250</li>
                        <li>- Bursary Applications: R250</li>
                        <li>- Combo of Varsity & Bursary Applications: R400</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="image-container">
                  <Image
                    src="/images/4.jpg"
                    alt="Summary image"
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </section>
            <br></br>
            <section>
              <h3>Testimonials</h3>
              <div className="testimonials">
                <div className="image-container">
                  <Image
                    src="/images/Testimonial.jpg"
                    alt="Testimonial image"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="text-container">
                  <h4>Mr L Godide</h4>
                  <p>
                    &quot; I&apos;m thrilled to share my incredible journey with
                    Excello Solutions! With their guidance and support, I
                    transformed from a struggling student on the verge of
                    failing my course to achieving an outstanding 6
                    Distinctions! Their expertise and mentorship helped me
                    overcome my academic challenges, build confidence, and
                    unlock my full potential. I&apos;m forever grateful for the
                    impact they&apos;ve had on my educational journey! If
                    you&apos;re struggling in college, I highly recommend
                    Excello Solutions. They truly care about your success and
                    will empower you to achieve your goals!&quot;
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
