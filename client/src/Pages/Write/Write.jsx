import React, { useContext, useState } from "react";
import "./Write.scss";
import { BiSolidImageAdd } from "react-icons/bi";
import { Context } from "../../context/Context";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      data.append("file", file);
      try {
        const res = await axios.post("/api/upload", data);
        newPost.photo = res.data.secure_url;
        console.log(res.data.secure_url)
      } catch (error) {
        console.log(error)
      }
    }
    try {
      const res = await axios.post("/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {}
  };

  return (
    <div className="write">
      <div className="writeContainer">
        {file && (
          <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput" className="inputImage">
              <BiSolidImageAdd />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              onChange={e=> setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              onChange={e=> setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Write;
