import { FC } from "react";
import { User } from "../User/User";
import { Counter } from "../Counter/Counter";
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";
import { TextInput } from "../TextInput/TextInput";
import { TextInputWithFocus } from "../TextInputWithFocus/TextInputWithFocus";
import { ComponentWithRef } from "../ComponentWithRef/ComponentWithRef";
import MyForm from "../MyForm/MyForm";
import ParentComponent from "../ParentComponent/ParentComponent";

// import css from "./App.module.css";

const App = () => {
  const handleSave = (value: string) => {
    alert(value);
  };
  return (
    <div>
      <User name="Bob" age={45}>
        Someone else!
      </User>
      <Counter />
      <TextInput initialValue="enterText" onSave={handleSave} />
      <TextInputWithFocus />
      <ComponentWithRef />
      <LoadingComponent />
      <ParentComponent />
      <MyForm />
    </div>
  );
};

export default App;
