import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';

function App() {
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  return (
    <>
      <CountRenderer />
      <Buttons />
    </>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <>{count}</>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </>
  );
}

export default App;
