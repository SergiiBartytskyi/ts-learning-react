// import { ChangeEvent } from "react";

// type InputProps = {
//   value: string | number;
//   type: "text" | "number";
//   onChange: (value: string | number) => void;
// };

// function Input({ value, type, onChange }: InputProps) {
//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     let newValue = event.target.value;

//     if (type === "number") {
//       newValue = Number(newValue);
//     }
//     console.log("Змінене значення:", newValue);
//     onChange(newValue);
//   };

//   return <input value={value.toString()} type={type} onChange={handleChange} />;
// }

// export default Input;

import { ChangeEvent, KeyboardEvent } from "react";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  onPressEnter: () => void;
};

function Input({ value, onChange, onPressEnter }: InputProps) {
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Натиснута клавіша Enter");
      onPressEnter();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input value={value} onChange={handleChange} onKeyPress={handleKeyPress} />
  );
}

export default Input;
