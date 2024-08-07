import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import SnippetGenerator from "./components/Generator/SnippetGenerator";

function App() {
  const [editor, setEditor] = useState("vsCode");
  const [color, setColor] = useState("#065687");
  useEffect(() => {
    console.log(editor);
  });
  return (
    <div className={`bg-[${color}] md:overflow-hidden h-screen`}>
      <Navbar editor={editor} />
      <SnippetGenerator
        editor={editor}
        setEditor={setEditor}
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
