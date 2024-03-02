import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Buttton";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello my friend!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Click Me
        </Button>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
