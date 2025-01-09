import Head from "next/head";

export default function Appy() {
  return (
    <>
      <Head>
        <title>Apply_Now</title>
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
            <h1>Apply Now!</h1>
          </header>

          <main>
            <br></br>
            <form>
              <fieldset>
                <legend>Personal Information</legend>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" required />
                <label htmlFor="surname">Surname:</label>
                <input id="surname" type="text" name="surname" required />
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" required />
                <label htmlFor="number">WhatsApp Number:</label>
                <input id="number" type="tel" name="number" required />
              </fieldset>
              <fieldset>
                <legend>Services Needed</legend>
                <div className="services-container">
                  <label>
                    <input
                      type="checkbox"
                      name="service"
                      value="NBT Tutorial"
                    />
                    National Benchmark Test (NBT) Tutorial
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="service"
                      value="College Tutorial"
                    />
                    College Tutorial
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="service"
                      value="CAO Application"
                    />
                    Central Applications Office (CAO) Application
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="service"
                      value="NSFAS Application"
                    />
                    NSFAS Application
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="service"
                      value="Bursary Application"
                    />
                    Bursary Application
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="service"
                      value="CV Assistance"
                    />
                    Curriculum Vitae (CV) Assistance
                  </label>
                </div>
              </fieldset>
              <button type="submit">Submit</button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}
