// -_-
import Header from "../../components/header/Header";
import Heading from "../../components/UI/heading/Heading";
import ImageComponent from "../../components/UI/imageComponent/ImageComponent";
import styles from "./aboutpage.module.css";
const AboutPage = () => {
  return (
    <section>
      <Header
        headingText={"About us!"}
        headingType={1}
        headerText={
          "What is SNOWMAN? Well really we are just christmas enthusiasts and snow lovers...and we sell some stuff too :)"
        }
        btnNavigate={""}
        btnText={"See our products"}
        btnType={"cta"}
        imgUrl={
          "https://images.unsplash.com/photo-1733108906469-9b18de087dce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        imgAlt={"About us image"}
      />
      <div className={styles.aboutContainer}>
        <Heading headingText={"But why us..."} headingType={1} />
        <div>
          <ImageComponent
            url={
              "https://plus.unsplash.com/premium_photo-1680303237111-35809e47fcc1?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"why us image"}
          />
          <p>
            When the holiday season arrives, finding the perfect decorations can
            be overwhelming. That's where <span>Snowman</span> comes in—a
            one-stop online shop designed to make your holiday shopping easy,
            enjoyable, and stress-free. Snowman specializes in Christmas items,
            offering a curated selection of high-quality décor. From twinkling
            lights and elegant candles to festive ornaments, we have everything
            you need to create the perfect holiday atmosphere. Our{" "}
            <span>user-friendly</span>
            website makes browsing a breeze, with detailed product descriptions
            and high-quality images to help you choose with ease. Plus, fast
            shipping and excellent customer service ensure your holiday
            treasures arrive on time. At Snowman, we’re also committed to
            <span>sustainability</span>. Many of our products are made from
            eco-friendly materials, so you can celebrate responsibly and reduce
            waste. This Christmas, skip the crowded stores and choose Snowman
            for a hassle-free shopping experience. Light up your holidays with
            Snowman—the perfect partner for all your festive needs!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
