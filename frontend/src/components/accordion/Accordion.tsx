// -_-
import styles from "./accordion.module.css";
import { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import Heading from "../UI/heading/Heading";

type AccordinProps = {
  heading: string;
  populate: { userName: string; review: string }[];
};

const Accordion = ({ heading, populate }: AccordinProps) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  const handleAccordionOpen = () => {
    setOpenAccordion((prev) => !prev);
  };

  console.log(populate);

  return (
    <>
      <section
        className={styles.accordionContainer}
        onClick={handleAccordionOpen}
      >
        <Heading headingText={heading} headingType={2} />
        <i className={styles.arrow}>
          {!openAccordion ? <FaArrowCircleDown /> : <FaArrowCircleUp />}
        </i>
      </section>
      <div
        className={`${styles.accordionDropDown} ${
          openAccordion ? styles.active : ""
        }`}
      >
        {populate.map((item, index) => (
          <div className={styles.dropDownItem} key={index}>
            <h4>{item.userName}</h4>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
