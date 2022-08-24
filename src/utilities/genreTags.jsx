export const renderGenreTags = (tagName) => {
  let color = "";
  switch (tagName) {
    case "How To":
      return (color = "primary");
    case "Elastic":
      return (color = "success");
    case "Self Care":
      return (color = "accent");
    case "LGBTQIA+":
      return (color = "warning");
    default:
      return (color = "default");
  }
};
