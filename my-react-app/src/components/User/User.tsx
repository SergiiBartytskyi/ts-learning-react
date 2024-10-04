import { ReactNode } from "react";

// type Props = {
//   name: string;
//   age: number;
// };

// export const User: FC<Props> = ({ name, age }) => {
//   return (
//     <div>
//       <p>{`User name is ${name}`}</p>
//       <p>{`User age is ${age}`}</p>
//
//     </div>
//   );
// };

type Props = {
  name: string;
  age: number;
  children: ReactNode; // Типізация для children
};

export const User = ({ name, age, children }: Props) => {
  return (
    <div>
      <p>{`User name is ${name}`}</p>
      <p>{`User age is ${age}`}</p>
      {children} {/*render children */}
    </div>
  );
};
