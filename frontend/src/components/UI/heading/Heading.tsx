// -_-

// import styles from "./heading.module.css";

type HeadingProps = {
  headingText: string;
  headingType: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading: React.FC<HeadingProps> = ({ headingText, headingType }) => {
  const Tag = `h${headingType}` as keyof JSX.IntrinsicElements;

  return <Tag>{headingText}</Tag>;
};

export default Heading;
