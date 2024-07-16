import CommonButton from "@/components/common-button";
import CommonCard from "@/components/common-card";
import { scrumBoardOptions } from "@/config";

function TaskItem({
  item,
  setShowDialog,
  taskFormData,
  handleDelete,
  setCurrentEditedId,
}) {
  return (
    <CommonCard
      title={item?.title}
      description={
        scrumBoardOptions.find((boardOption) => boardOption.id === item?.status)
          .label
      }
      footerContent={
        <div className="flex w-full justify-between items-center">
          <CommonButton
            onClick={() => {
              setShowDialog(true);
              setCurrentEditedId(item?._id);
              taskFormData.setValue("title", item?.title);
              taskFormData.setValue("description", item?.description);
              taskFormData.setValue("status", item?.status);
              taskFormData.setValue("priority", item?.priority);
            }}
            buttonText={"Edit"}
          />
          <CommonButton
            onClick={() => handleDelete(item?._id)}
            buttonText={"Delete"}
          />
        </div>
      }
    />
  );
}

export default TaskItem;
