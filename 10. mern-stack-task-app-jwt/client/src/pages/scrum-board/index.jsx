import CommonCard from "@/components/common-card";
import { scrumBoardOptions } from "@/config";
import { TaskManagerContext } from "@/context";
import { getAllTasksApi, updateTaskApi } from "@/services";
import { Fragment, useContext, useEffect } from "react";

function ScrumBoardPage() {
  const { user, tasksList, setTasksList } = useContext(TaskManagerContext);

  async function fetchListOfTasks() {
    const response = await getAllTasksApi(user?._id);

    if (response?.success) {
      setTasksList(response?.tasksList);
    }
  }

  function onDragStart(event, getTaskId) {
    event.dataTransfer.setData("id", getTaskId);
  }

  async function updateTaskByStatus(getTask) {
    await updateTaskApi(getTask);
    await fetchListOfTasks();
  }

  function onDrop(event, getCurrentStatus) {
    const getDraggedTaskId = event.dataTransfer.getData("id");

    let findCurrentTask = tasksList.find(
      (item) => item._id.toString() === getDraggedTaskId
    );

    findCurrentTask = {
      ...findCurrentTask,
      status: getCurrentStatus,
    };

    updateTaskByStatus(findCurrentTask);
  }

  function renderTaskByTaskStatus() {
    const taskStatuses = {
      todo: [],
      inProgress: [],
      blocked: [],
      review: [],
      done: [],
    };

    tasksList.forEach((taskItem) => {
      taskStatuses[taskItem.status].push(
        <div
          onDragStart={
            taskItem.status !== "done"
              ? (event) => onDragStart(event, taskItem._id)
              : null
          }
          className="mb-2"
          draggable={taskItem?.status !== "done" ? true : false}
        >
          <CommonCard
            extraTextStyles={taskItem?.status === "done" ? "line-through" : ""}
            title={taskItem?.title}
            description={
              scrumBoardOptions.find(
                (boardOption) => boardOption.id === taskItem?.status
              ).label
            }
          />
        </div>
      );
    });

    console.log(taskStatuses);

    return taskStatuses;
  }

  useEffect(() => {
    if (user !== null) fetchListOfTasks();
  }, [user]);

  return (
    <Fragment>
      <div className="grid grid-cols-5 gap-2 h-full">
        {scrumBoardOptions.map((item) => (
          <div
            className="border border-[#333333] rounded overflow-auto"
            key={item.id}
            onDrop={(event) => onDrop(event, item.id)}
            onDragOver={(event) => event.preventDefault()}
          >
            <div className="px-1 py-3 text-center bg-black border-none mb-3">
              <h3 className="text-2xl font-extrabold text-white">
                {item.label}
              </h3>
            </div>
            <div className="p-3">{renderTaskByTaskStatus()[item.id]}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default ScrumBoardPage;
