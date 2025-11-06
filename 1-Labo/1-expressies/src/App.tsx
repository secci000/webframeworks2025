const App = () => {
  let random: number = Math.random();
  let getal1: number = Math.floor(Math.random() * 10);
  let getal2: number = Math.floor(Math.random() * 10);
  return (
    <>
      <h1>Labo 1</h1>
      <p>{random}</p>
      <p>Random getal 1: {getal1}</p>
      <p>Random getal 2: {getal2}</p>
      {random < 0.5 ?
        <p>{getal1} + {getal2} = {add(getal1, getal2)}</p> :
        <p>{getal1} * {getal2} = {multiply(getal1, getal2)}</p>
      }

    </>
  )
}
function add(a: number, b: number): number {
  return a + b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
export default App;