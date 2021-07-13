export const conf = [
  {
    name: "First Name",
    field: "firstName",
    type: "text",
  },
  {
    name: "Last Name",
    field: "lastName",
    type: "text",
  },
  {
    name: "Age",
    field: "age",
    type: "text",
    hidden: true,
    color: {
      field: "eyeColor",
      default: "blue",
    },
  },
  {
    name: "Gender",
    field: "gender",
    type: "text",
  },
  {
    name: "Email",
    field: "email",
    type: "email",
    style: {
      width: "241px",
    },
  },
  {
    name: "Phone",
    field: "phone",
    type: "phone",
    style: {
      width: "150px",
    },
  },
  {
    name: "Registered Time",
    field: "registered",
    type: "date",
  },
  {
    name: "Status",
    field: "isActive",
    type: "badge",
  },
  {
    name: "Latitude",
    field: "latitude",
    type: "number",
    hidden: true,
  },
  {
    name: "Longitude",
    field: "longitude",
    type: "number",
    hidden: true,
  },
  {
    name: "Tags",
    field: "tags",
    type: "tag",
    hidden: true,
  },
  {
    name: "About",
    field: "about",
    type: "text",
    hidden: true,
  },
];
