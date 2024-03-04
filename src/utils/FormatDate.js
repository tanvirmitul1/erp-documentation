function FormatDate(isoDate) {
  if (isoDate) {
    const dateObject = new Date(isoDate);

    const day = dateObject.getDate();
    const month = dateObject.toLocaleString("en-US", { month: "long" });
    const year = dateObject.getFullYear();
    const hour = addLeadingZero(dateObject.getHours());
    const minute = addLeadingZero(dateObject.getMinutes());
    const second = addLeadingZero(dateObject.getSeconds());

    const formattedDate = `${month} ${day}, ${year}, ${hour}:${minute}:${second}`;

    return formattedDate;
  } else {
    return null;
  }
}

// Function to add leading zeros
const addLeadingZero = (value) => {
  return value < 10 ? "0" + value : value;
};

export default FormatDate;
