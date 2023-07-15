
import './App.css'
import Header from './components/Header';

import Footer from './components/Footer';
import Content from './components/Content';






const App = () => {

  const myProfile = {
    name: "Mohammad Sorowar Hossain",
    designation: "Jr. Excutive",
    company: "SSL Wireless",
    quote:
      "It is not heroes that make history, but history that makes heroes. ― Joseph Stalin",
  };
  return (
    <div>
      <Header title={"React"} />
      <br />
      <Content />
      <Footer myProfile={myProfile} />
    </div>
  );
};

export default App;
