import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About_Us</title>
      </Head>

      <div>
        <header>
          <h1>About Us</h1>
          <hr />
        </header>

        <main>
          <section>
            <h3>Our Mission</h3>
            <p>
              Excello Solutions is committed to empowering students through
              personalized tutoring and consulting services. Based in Pinetown,
              KwaZulu-Natal, we aim to bridge the gap between academic success
              and career readiness.
            </p>
          </section>
          <section>
            <h3>Meet Our Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image
                  src="/images/LelethuBobo.jpg"
                  alt="Lelethu Bobo"
                  width={200}
                  height={200}
                />
                <h3>Lelethu Bobo</h3>
                <p>Final-year BBusSci Analytics student at UCT</p>
                <p>Services: NBT, Commerce Courses, Applications</p>
              </div>
              <div className="team-member">
                <Image
                  src="/images/Girl.jpg"
                  alt="Team Member Girl"
                  width={200}
                  height={200}
                />
                <h3>Girl</h3>
                <p>Educational Consultant & Tutor</p>
                <p>Services: NBT, Applications</p>
              </div>
              <div className="team-member">
                <Image
                  src="/images/Nsimbi.jpg"
                  alt="Nsimbi"
                  width={200}
                  height={200}
                />
                <h3>Nsimbi</h3>
                <p>Educational Consultant & Tutor</p>
                <p>Services: Science Courses, Applications</p>
              </div>
              <div className="team-member">
                <Image
                  src="/images/SboneloGumede.jpg"
                  alt="Sbonelo Gumede"
                  width={200}
                  height={200}
                />
                <h3>Sbonelo Gumede</h3>
                <p>BSc (Honours) in Statistics and Data Science, UCT</p>
                <p>Services: Software Development</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
