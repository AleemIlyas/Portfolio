import React, { useEffect, useState } from "react";
import styles from "./addNew.module.css";
import { TagsInput } from "react-tag-input-component";
import { adminInstance } from "../../../../axios";
import Spinner from "../../../../components/UI/Spinner/spinner";

export default function AddNew(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [selected, setSelected] = useState([]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  var data = null;

  useEffect(() => {
    setMsg(null);
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    for (let i in selected) {
      formData.append("technologies", selected[i]);
    }

    adminInstance
      .post("/addProject", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setLoading(false);
        setMsg(res.data);
        props.func();
      })
      .catch((err) => {
        setLoading(false);
        setMsg(err.message);
      });
  };

  data = msg ? (
    <div style={{ backgroundColor: "#c2d5ff" }} className="w-100 p-6">
      {msg}
    </div>
  ) : (
    <form
      onSubmit={submitHandler}
      className={["w-11/12 flex  flex-col p-6", styles.form].join(" ")}
    >
      <h1> Add New Project! </h1>
      {/* <p> {err.length==0 ? null : err } </p> */}
      <input type="file" name="image" required={true} />
      <input
        required={true}
        onChange={(e) => setTitle(e.target.value)}
        className="mt-3 mb-3 p-4"
        type={"text"}
        name="title"
        placeholder="Add Title of Project"
      />
      <textarea
        required={true}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-0 mb-3 p-4"
        name="description"
        placeholder="Enter Project Description"
      ></textarea>
      <input
        required={true}
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="mt-0 mb-3 p-1"
        type="text"
        name="link"
        placeholder="Enter Project Link"
      />
      <TagsInput
        value={selected}
        onChange={setSelected}
        placeHolder="enter technologies used"
      />
      <button className={["p-3 mt-3 ", styles.submitBtn].join(" ")}>
        {" "}
        Add Project!{" "}
      </button>
    </form>
  );

  return (
    <div className={["flex justify-center items-center", styles.div].join(" ")}>
      {loading ? (
        <div
          style={{ height: "30em", width: "100%", backgroundColor: "#c2d5ff" }}
        >
          <Spinner />
        </div>
      ) : (
        data
      )}
    </div>
  );
}
