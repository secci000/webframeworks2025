import styles from "./App.module.css";
import cherry from "./assets/cherry.png"
import grape from "./assets/grape.png"
import lemon from "./assets/lemon.png"
import seven from "./assets/seven.png"
import watermelon from "./assets/watermelon.png"
const NUMBR_OF_SLOTS:number = 3;
let slotImages = [
  cherry,
  grape,
  lemon,
  seven,
  watermelon
];
interface SlotMachineProps{
  slots: number
}
const GetRandomSlots = (numberOfSlots:number) => {
  let slots:number[] = [];
  for(let i:number = 0; i<numberOfSlots; i++){
    slots.push(Math.floor(Math.random() * 5));
  }
  return slots;
}
interface SlotsProps{
  value:number
}
const Slot = ({value}: SlotsProps) => {
  return <img className={styles.slot} src={slotImages[value]} alt="slot" width="100"/>;
};
const Slotmachine = ({slots}:SlotMachineProps) => {
  let randomSlots = GetRandomSlots(slots);
  let win: boolean = randomSlots.every(slot => slot === randomSlots[0])
  return (
    <>
      {
        randomSlots.map((slot, index) => 
        <Slot value={slot} key={index}/>)
      }
      {
        win ?
          <p className={styles.won}>Je hebt gewonnen</p> :
          <p className={styles.lost}>Je hebt verloren</p>
      }
    </>
  );
};

const App = () => {
  return (
    <>
      <img src={cherry} width="100"></img>
      <img src={grape} width="100"></img>
      <img src={lemon} width="100"></img>
      <img src={seven} width="100"></img>
      <img src={watermelon} width="100"></img>
      <h1>Slotmachine hieronder</h1>
      <Slotmachine slots={3}/>
      <Slotmachine slots={4}/>
      <Slotmachine slots={5}/>
    </>
  )
}
export default App;