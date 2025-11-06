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
  let slot1: number = Math.floor(Math.random() * 5)
  let slot2: number = Math.floor(Math.random() * 5)
  let slot3: number = Math.floor(Math.random() * 5)
  let slot4: number = Math.floor(Math.random() * 5)
  let slot5: number = Math.floor(Math.random() * 5)

  let slotten: number[] = [
    slot1,
    slot2,
    slot3,
    slot4,
    slot5
  ]
  let win:boolean = slotten.every(slot => slot === slotten[0])
  return (
    <>
      <img src={cherry} width="100"></img>
      <img src={grape} width="100"></img>
      <img src={lemon} width="100"></img>
      <img src={seven} width="100"></img>
      <img src={watermelon} width="100"></img>
      <h1>Slotmachine hieronder</h1>
      {
        slotten.map(slot => <img key={slot} src={slotImages[slot]} width="100"></img>)
      }
      {win?
        <p>Je hebt gewonnen</p> :
        <p>Je hebt verloren</p>
      }
    </>
  )
}
export default App;