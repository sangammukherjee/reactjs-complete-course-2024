export const signUpFormControls = [
  {
    id: "name",
    label: "Name",
    placeholder: "Enter your name",
    componentType: "input",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const signInFormControls = [
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const scrumBoardOptions = [
  {
    id: "todo",
    label: "To DO",
  },
  {
    id: "inProgress",
    label: "In Progress",
  },
  {
    id: "blocked",
    label: "Blocked",
  },
  {
    id: "review",
    label: "Review",
  },
  {
    id: "done",
    label: "Done",
  },
];

export const addNewTaskFormControls = [
  {
    id: "title",
    type: "text",
    placeholder: "Enter title",
    label: "Title",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "status",
    placeholder: "Enter Status",
    label: "Status",
    componentType: "select",
    options: scrumBoardOptions,
  },
  {
    id: "priority",
    placeholder: "Enter priority",
    label: "Priority",
    componentType: "input",
    componentType: "select",
    options: [
      {
        id: "low",
        label: "Low",
      },
      {
        id: "medium",
        label: "Medium",
      },
      {
        id: "high",
        label: "High",
      },
    ],
  },
];
