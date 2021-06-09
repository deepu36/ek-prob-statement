import logo from "./logo.svg";
import "./App.css";
import Dropdown from "./shared/dropdown/dropdown";
import { countriesList } from "./mockdata/mockData";

function App() {
  // const optionsList = [
  //   {
  //     elementTitle: "Title",
  //     elementType: "dropdown",
  //     placeholder: "All",
  //     name: "title",
  //     optionsList: ["All", "Option1", "Option2"],
  //   },
  //   {
  //     elementTitle: "Gender",
  //     elementType: "dropdown",
  //     placeholder: "All",
  //     name: "gender",
  //     optionsList: ["All", "Option1", "Option2"],
  //   },
  // ];
  // let optionsList = ["All", "Option1", "Option2"];
  return (
    <div className="App">
      <Dropdown optionsList={countriesList} />
      {/* <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select> */}
    </div>
  );
}

export default App;
