export const renderGenreTags = (tagName) => {
  let color = "";
  switch (tagName) {
    case "Business":
      return (color = "primary");
    case "Arts":
      return (color = "success");
    case "Education":
      return (color = "accent");
    case "Off Topic":
      return (color = "warning");
    default:
      return (color = "default");
  }
};
