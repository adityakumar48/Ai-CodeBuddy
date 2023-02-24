import React, { useState } from "react";

const Article = () => {
  const [prompt, setPrompt] = useState("");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/tools/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setArticle(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert(err);
    }
  };

  return (
    <div>
      <h1>Enter The Prompt</h1>
      <p>Enter the prompt here</p>
      <input type="text" name="prompt" onChange={handleChange} value={prompt} />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <textarea
        cols={50}
        rows={20}
        style={{
          resize: "none",
          backgroundColor: "black",
          color: "white",
          border: "none",
          outline: "none",
          fontSize: "16px",
        }}
        name="article"  
        id="textarea"
        onChange={handleChange}
        value={loading ? "Loading..." : article}
      ></textarea>
    </div>
  );
};

export default Article;
