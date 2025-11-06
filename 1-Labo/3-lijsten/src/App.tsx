interface Student {
  id: number,
  name: string,
  age: number
};
const App = () => {
  let getallen: number = [1, 2, 3, 4, 4, 5, 6]
  let studenten: string = ["Jef", "Jan", "Joris", "Andie", "Senne"];
  let studentenI: Student = [
    { id: 1, name: "Jef", age: 20 },
    { id: 2, name: "Jan", age: 21 },
    { id: 3, name: "Joris", age: 22 },
    { id: 4, name: "Andie", age: 23 },
    { id: 5, name: "Senne", age: 24 },

  ]
  return (
    <>
      <h1>Getallenlijst</h1>
      <ul>
        {
          getallen.map((number) => <li key={number}>{number}</li>)
        }
      </ul>
      <h1>Studentenlijst</h1>
      <ol>
        {
          studenten.map((student) => <li key={student}>{student}</li>)
        }
      </ol>
      <h1>Studentenlijst met J</h1>
      <ol>
        {
          studenten
            .filter(student => student.charAt(0) === "J")
            .map(student => <li key={student}>{student}</li>)
        }
      </ol>
      <h1>Select</h1>
      <select>
        {
          studenten.map(student => <option key={student}>{student}</option>)
        }
      </select>
      <table>
        <thead>
          <th>Naam</th>
          <th>Leeftijd</th>
        </thead>
        <tbody>
          {
            studentenI.map(student =>
              <tr>
                <td>{student.name}</td>
                <td>{student.age}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}
export default App;