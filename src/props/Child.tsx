/*
Define what props a Child expects to receive
Allow us to check we send correct props to Child
Allow us to check that we use them correctly in Child
*/
interface ChildProps {
  color: string; 
  onClick: () => void; 
  // React 18 - removal of implicit children in React.FC types
  children?: React.ReactNode;
}

/*
Annotate with Interface to apply checks
Downside - TS doesn't understand that we are defining a React Component
*/
export const Child = ({ color, onClick }: ChildProps) => {
  return <div>
    {color}
    <button onClick={onClick}>Click me</button>
  </div>;
};

/*
Tell TS this is a React.FC  === React.FunctionComponent
  Child component might have properties 
  Child component will receive props of ChildProps
*/
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
  return <div>
    {color}
    <button onClick={onClick}>Click me</button>
  </div>
};
