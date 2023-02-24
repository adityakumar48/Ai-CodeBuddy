import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CheckErrorInCode = () => {
  const [code, setCode] = useState(`
#include <iostream>

using namespace std;

int main()
{
  cout<<"Hello World";
  return 0;
}
`);
  const [loading, setLoading] = useState(false);
  const [timeComplexity, setTimeComplexity] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  function handleEditorChange(value, event) {
    setCode(value);
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(code);
      setLoading(true);
      const response = await fetch(
        "http://localhost:8000/api/tools/CheckErrors",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        }
      );
      const data = await response.json();
      console.log(data);
      setTimeComplexity(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert(err);
    }
  };

  return (
    <form action="">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px 40px",
          }}
        >
          <div style={{ marginLeft: "20px", marginRight: "40px" }}>
            <Editor
              height="90vh"
              width="50vw"
              language="cpp"
              defaultValue={`
#include <iostream>

using namespace std;

int main()
{
  cout<<"Hello World";

  return 0;
}
              `}
              theme="vs-dark"
              onChange={handleEditorChange}
            />
          </div>
          <div>
            <textarea
              name="timeComplexity"
              onChange={handleChange}
              value={loading ? "Loading..." : timeComplexity}
              id="timeComplexity"
              className="w-96 h-96 font-bold bg-gray-300 px-3"
            ></textarea>
          </div>
        </div>
        <input
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 right-0 my-5 mr-96 "
          value="Submit"
        />
      </div>
    </form>
  );
};

export default CheckErrorInCode;
