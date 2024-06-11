import "./App.css";

type StringOrNumber = boolean | number;

interface TodoInterface {
  title: string;
  body: string;
  completed: StringOrNumber;
  id: number;
  gender?: string;
}

interface TodoInput {
  props: TodoInterface;
}

function App() {
  return (
    <>
      <Todo
        props={{
          title: "Rajesh",
          body: "6 Packs",
          completed: true,
          id: 1,
          gender: "male",
        }}
      />
    </>
  );
}

export default App;

const Todo = ({ props }: TodoInput) => {
  return <p>{props.title}</p>;
};
