import React, { useState, lazy, useEffect } from "react";
import styles from "./project.module.css";
import { AiOutlineEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
const AddNew = lazy(() => import("../Components/addNewModal/addNew"));
const Modal = lazy(() => import("../../../components/UI/Modal/Modal"));
import { adminInstance } from "../../../axios";
import Spinner from "../../../components/UI/Spinner/spinner";

export default function Project() {
  const [addProjectModel, setaddProjectModel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const openAddProjectForm = () => {
    setaddProjectModel(true);
  };

  const closeAddProjectForm = () => {
    setaddProjectModel(false);
  };

  const deleteHandler = (id) => {
    setLoading(true);
    adminInstance
      .delete(`/deleteProject/${id}`)
      .then((res) => {
        console.log(res.ok);
        setData([...data].filter(({ _id }) => _id !== id));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  function getProjects() {
    adminInstance
      .get("/getProjects")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return loading ? (
    <div className="w-4/5 flex justify-center items-center">
      <Spinner />
    </div>
  ) : (
    <React.Fragment>
      <Modal show={addProjectModel} closeModal={closeAddProjectForm}>
        <AddNew func={getProjects} />
      </Modal>
      <div className="w-4/5">
        <h1
          className={[
            "ml-16",
            "pt-16",
            "pb-0",
            "inline-block",
            styles.heading,
          ].join(" ")}
        >
          {" "}
          Projects{" "}
        </h1>

        {/* Already added Projects */}

        <div
          className={[
            "flex justify-center flex-wrap w-11/12",
            styles.Project,
          ].join(" ")}
        >
          {data.map((item) => {
            return (
              <div
                key={item.technologies}
                className={[
                  "m-3 pt-8 pb-8 pl-3 pr-3 text-left bg-blue-900",
                  styles.card,
                ].join(" ")}
              >
                <h1 className={["font-bold text-2xl pt-3 mb-5"]}>
                  {" "}
                  {item.title}{" "}
                </h1>
                <p className={["font-normal"]}>
                  {item.description.slice(0, 100)}
                </p>
                <div
                  className={[
                    "flex content-center justify-center mt-4",
                    styles.controls,
                  ].join(" ")}
                >
                  <AiOutlineEdit className="text-4xl mr-3 text-orange-300" />
                  <RxCross1
                    className="text-4xl ml-3 text-red-600"
                    onClick={() => deleteHandler(item._id)}
                  />
                </div>
              </div>
            );
          })}

          {/* card for add new project */}
          <div
            className={[
              "m-3 pt-8 pb-8 pl-3 pr-3 text-left max-w-xs bg-blue-900",
              styles.addNew,
            ].join(" ")}
            onClick={openAddProjectForm}
          >
            <FiPlus className="text-3xl" />
            <h1 className={["font-bold text-2xl pt-3 mb-5"]}> Add New! </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
