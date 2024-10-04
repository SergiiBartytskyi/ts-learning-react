import { useRef } from "react";

export function ComponentWithRef() {
  const divRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const countRef = useRef<number>(0);

  const increment = () => {
    countRef.current += 1;
    console.log(`Поточне значення: ${countRef.current}`);
  };

  return (
    <>
      <div ref={divRef}>Це div елемент</div>
      <textarea ref={textareaRef}></textarea>
      <select ref={selectRef}></select>
      <button onClick={increment}>Збільшити</button>
    </>
  );
}
