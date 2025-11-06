import cherry from "./assets/cherry.png"
import grape from "./assets/grape.png"
import lemon from "./assets/lemon.png"
import seven from "./assets/seven.png"
import watermelon from "./assets/watermelon.png"
let slotImages = [
  cherry,
  grape,
  lemon,
  seven,
  watermelon
];
const App = () => {
  let slot1: random = Math.floor(Math.random() * 5)
  let slot2: random = Math.floor(Math.random() * 5)
  let slot3: random = Math.floor(Math.random() * 5)
  return (
    <>
      <img src={cherry} width="100"></img>
      <img src={grape} width="100"></img>
      <img src={lemon} width="100"></img>
      <img src={seven} width="100"></img>
      <img src={watermelon} width="100"></img>
      <h1>Slotmachine hieronder</h1>
      <img src={slotImages[slot1]} width="100"></img>
      <img src={slotImages[slot2]} width="100"></img>
      <img src={slotImages[slot3]} width="100"></img>
      {slot1 == slot2 && slot1 == slot3 ?
        <p>Je hebt gewonnen</p> :
        <p>Je hebt verloren</p>
      }
    </>
  )
}
export default App;