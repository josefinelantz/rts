import ReactDOM from "react-dom/client";

// Get a reference to div with id root
const el = document.getElementById("root") as HTMLElement;

// Tell React to take control over that element
const root = ReactDOM.createRoot(el);

// Creater App component 
function App() {
  return (
    <div>App</div>
  );
};
// Show the component on the screen
root.render(<App/>);