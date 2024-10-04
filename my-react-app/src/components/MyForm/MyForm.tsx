import { FormEvent } from "react";

const MyForm = () => {
  const handleSubmit = (event: FormEvent) => {
    // запобігаємо стандартній поведінці форми (відправці форми)
    event.preventDefault();
    console.log("Форма була відправлена!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Відправити</button>
    </form>
  );
};

export default MyForm;
