function FormatDate(isoDate) {
  if (isoDate) {
    const dateObject = new Date(isoDate);

    const day = dateObject.getDate();
    const month = dateObject.toLocaleString("en-US", { month: "long" });
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();
    const second = dateObject.getSeconds();

    const formattedDate = `${month} ${day}, ${year} , ${hour}:${minute}:${second} `;

    return formattedDate;
  } else {
    return null;
  }
}

export default FormatDate;
