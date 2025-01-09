import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <div>
        <header>
          <h1>Excello Solutions</h1>
          <hr />
          <h2>Educational Consultant/Tutor</h2>
          <hr />
        </header>

        <main>
          <section>
            <h3>Summary</h3>
            <p>
              We are a dynamic education consulting firm dedicated to bridging
              the gap between students and the working industry. Our mission is
              to provide personalized tutoring and guidance to high school and
              college students, empowering them to achieve academic excellence
              and successfully transition into their chosen careers.
            </p>
          </section>

          <section>
            <h3>Our Services</h3>
            <ul>
              <li>National Benchmark Test (NBT) Tutoring Sessions</li>
              <li>College Tutoring Sessions</li>
              <li>Central Applications Office (CAO) Applications</li>
              <li>
                National Student Financial Aid Scheme (NSFAS) Applications
              </li>
              <li>Corporate Bursary Applications</li>
              <li>Curriculum Vitae (CV) Assistance</li>
            </ul>
          </section>

          <section>
            <h3>Pricing</h3>
            <h4>National Benchmark Test (NBT) Tutoring</h4>
            <p>MAT R950</p>
            <p>AQL & AL R950</p>

            <h4>College Tutoring</h4>
            <p>R650 per module per month</p>

            <h4>Applications</h4>
            <p>University Applications: R250</p>
            <p>Bursary Applications: R250</p>
            <p>Combo of Varsity & Bursary Applications: R400</p>
          </section>
          <section>
            <h3>Testimonials</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="testimonials" style={{ marginRight: "20px" }}>
                <Image
                  src="/images/Testimonial.jpg"
                  alt="Testimonial image"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p>
                  "I'm thrilled to share my incredible journey with Excello
                  Solutions! With their guidance and support, I transformed from
                  a struggling student on the verge of failing my course to
                  achieving an outstanding 6 Distinctions! Their expertise and
                  mentorship helped me overcome my academic challenges, build
                  confidence, and unlock my full potential. I'm forever grateful
                  for the impact they've had on my educational journey! If
                  you're struggling in college, I highly recommend Excello
                  Solutions. They truly care about your success and will empower
                  you to achieve your goals!" ~ Mr L.Godide
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
