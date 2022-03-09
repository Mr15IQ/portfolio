import Hero from "../components/hero/Hero";
import Layout from "../components/layout/Layout";
import Card from "../components/cards/Card";
import SectionBreak from "../components/sectonbreak/SectionBreak";
import ContactForm from "../components/contactForm/ContactForm";
function Home() {
  return (
    <Layout>
      <title>Kizi Key Company</title>
      <Hero
        heading="Keyboards"
        subHeading="Arisu layout with shelved capslock and light tactiles fight me"
        buttonText="To the about page"
        bgImage="/oldKeyboardTyping.gif"
      />
      <SectionBreak />
      <h2>Builds, switches, ect.</h2>
      <div className="flex justify-space-evenly flex-wrap">
        <Card
          image="/boxTopsCopy.png"
          alt="DNA65"
          title="Pre-built DNA65"
          text="for sale! 110$ and its *plateless*"
          buttonText="learn more"
          buttonLink="/DNA65"
        />
        <Card
          image="/face.png"
          alt="sheeeeeeesh"
          title="yoyr mom "
          text="sheeeeeeeeeesh"
          buttonText="learn more"
          buttonLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
      </div>
      <SectionBreak />
      <h1>Contact me!</h1>
      <ContactForm />
    </Layout>
  );
}

export default Home;
