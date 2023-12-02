const titles = [
  "Po zásnubách",
  "12 měsíců před",
  "10 měsíců před",
  "8 měsíců před",
  "6 měsíců před",
  "4 měsíce před",
  "3 měsíce před",
  "2 měsíce před",
  "Měsíc před",
  "2 týdny před",
  "Týden před",
  "Den před",
];

export const calculateTimeline = () => {
  const weddingDate = JSON.parse(localStorage.getItem("date"));
  console.log(weddingDate);

  var date1 = new Date(weddingDate);
  var date2 = new Date(); // Assumes the current date

  // Calculate the difference in milliseconds
  var timeDifference = date1 - date2;

  // Convert the difference to days
  var daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  console.log(daysDifference);
};
