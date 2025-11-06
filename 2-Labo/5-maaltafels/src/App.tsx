import styles from "./App.module.css"
interface EditMultiplicationsProps {
  multiplication: number
}
const MultiplicationTable = ({ multiplication }: EditMultiplicationsProps) => {
  const columns = Array.from({ length: multiplication }, (_, i) => i + 1);
  const rows = Array.from({ length: multiplication }, (_, i) => i + 1);
  return (
    <>
      <table>
        <thead>
          <th className={styles.thzero}>0</th>
          {
            columns.map(column => <th key={column}>{column}</th>)
          }
        </thead>
        <tbody>
          {
            rows.map(row => <tr>
              <th>
                {row}
              </th>
              {columns.map(col => <td>{row * col}</td>)}
            </tr>)
          }
        </tbody>
      </table>
    </>
  );
};
const App = () => {
  return (
    <>
      <MultiplicationTable multiplication={5}/>
      <MultiplicationTable multiplication={7}/>
      <MultiplicationTable multiplication={10}/>
    </>
  )
}
export default App;
