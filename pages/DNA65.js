import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/Layout";
import SectionBreak from "../components/sectonbreak/SectionBreak";
import ContactForm from "../components/contactForm/ContactForm";

function DNA65() {
  return (
    <Layout>
      <title>Kizi Key DNA65!</title>
      <h2>My DNA65 thats for sale!</h2>
      <h1>
        Im selling my DNA65! it contains handlubed akko radiant reds (with an
        option of a jelly black spacebar), BOW cherry profile keycaps, and it is
        **plateless** with some case foam.
      </h1>
      <h1>This is a good entry level board.</h1>
      <SectionBreak />
      <h1>
        If you have any questions or are interested in buying, click the Discord
        server link below and DM the user "Bluetode". 
        </h1>
        <h1>Or fill out the form and get into contact! (scroll down)</h1>
      <Hero
        buttonText="Discord Server"
        buttonLink="https://discord.gg/GRjnvSXS8G"
        bgImage="/boxTopsCopy.png"
      />
       <SectionBreak />
      <h1>Contact me</h1>
      <ContactForm />
    </Layout>
  );
}

export default DNA65;
