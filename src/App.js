import { useState } from "react";
import Inputadd from "./Components/Inputadd";
import Savedata from "./Components/Savedata";
import Editanddelete from "./Components/Editanddelete";

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([
    "Codechef",
    "Codeforces",
    "GeeksforGeeks",
    "Leetcode",
    "Hackerrank",
    "Hackerearth",
  ]);
  const [edit, setEdit] = useState(-1);
  const [edittext, seteditText] = useState("");

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>todo-list</h1>

        {/* Here I am Array Elements */}
        <div className="todo-body">
          {data.map((element, i) => (
            <div className="map-body" key={i}>
              {edit === i ? (
                <>
                  <Savedata
                    i={i}
                    edittext={edittext}
                    seteditText={seteditText}
                    data={data}
                    setData={setData}
                    edit={edit}
                    setEdit={setEdit}
                  />
                </>
              ) : (
                <>
                  <div className="data">{element}</div>
                  <Editanddelete
                    i={i}
                    element={element}
                    edittext={element}
                    seteditText={seteditText}
                    data={data}
                    setData={setData}
                    edit={edit}
                    setEdit={setEdit}
                  />
                </>
              )}
            </div>
          ))}

          <Inputadd text={text} setText={setText} data={data} setData={setData} />
        </div>
      </div>
    </>
  );
}
