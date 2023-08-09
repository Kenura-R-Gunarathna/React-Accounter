import Hero from "../components/molecules/Hero";

/* Loading utilities */
import useDocumentTitle from '../utils/useDocumentTitle';

export default function Home() {

  useDocumentTitle(process.env.REACT_APP_NAME + ' | The best account manager');

  return (
    <Hero />
  );
};