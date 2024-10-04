import { MouseEvent } from "react";

function ChildComponent() {
  const handleChildClick = (event: MouseEvent<HTMLButtonElement>) => {
    // Зупиняємо спливання події до батьківського компонента
    event.stopPropagation();

    console.log("Клікнуто дитячий компонент");
  };

  return <button onClick={handleChildClick}>Натисни мене</button>;
}

function ParentComponent() {
  const handleParentClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event);
    console.log("Клікнуто батьківський компонент");
  };

  return (
    <div onClick={handleParentClick}>
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;
