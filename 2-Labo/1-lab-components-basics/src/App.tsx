interface HeaderProps {
  title: string;
  subtitle: string;
}
const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  )
}
interface ListProps {
  items:string[];
}
const List = ({items}:ListProps) => {
  return (
    <>
      <ul>
        {
          items.map((item) => (<ListItem key={item} text={item}/>))
        }
      </ul>
    </>
  );
};
interface ListItemProps{
  text: string;
}
const ListItem = ({text}:ListItemProps) => {
  return <li>{text}</li>
}
interface FooterProps {
  copy: string;
  year: number;
}
const Footer = ({copy, year}:FooterProps) => {
  return (
    <>
      <p>&#169; {copy} ({year})</p>
    </>
  )
}
const App = () => {
  let items: string[] = [
    "item 1", "item 2", "item 3"
  ];
  return (
    <div>
      <Header title="Labo2" subtitle="Basic Components" />
      <List items={items}/>
      <Footer copy="Matthew Wan" year={2022} />
    </div>
  )
}
export default App;