import './App.scss';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Button from "./My_Style/Button";

function App() {
  return (
      <div className="wrapper">
          <Button children={'gede'} name={'Test Button'}/>
        <Header/>
        <Content/>
      </div>
  );
}

export default App;
