import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({name}) => {
  return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
};

const RightHandComponent = ({messeage}) => {
  return <p style={{ backgroundColor: 'red' }}>{messeage}!</p>;
};

function App() {
  return (
    <SplitScreen leftweight={1} rightweight={3}>
      <LeftHandComponent name="hideaki" />
      <RightHandComponent messeage="Hellow" />
    </SplitScreen>
  );
}

export default App;
