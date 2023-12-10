export const recalculateTimeline = (timelineInfo, date) => {
  if (!date) {
    return timelineInfo;
  }

  const date1 = new Date(date);
  const date2 = new Date();
  const timeDifference = date1 - date2;
  const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  const timePoints = [12, 10, 8, 6, 4, 3, 2, 1, 0.5, 0.25];
  const newTimePoints = timePoints.map((point) =>
    Math.floor((daysDifference * point) / 12),
  );

  const newTitles = newTimePoints.map((newPoint) => {
    if (newPoint > 84) {
      const result = Math.round(newPoint / 31);
      if (result > 4) {
        return `${result} měsíců před`;
      }
      return `${result} měsíce před`;
    } else if (newPoint > 6) {
      const result = Math.round(newPoint / 7);
      if (result > 4) {
        return ` ${result} týdnů před`;
      } else if (result > 1) {
        return ` ${result} týdny před`;
      }
      return ` ${result} týden před`;
    } else {
      const result = Math.round(newPoint);
      if (result > 4) {
        return ` ${result} dnů před`;
      } else if (result > 1) {
        return ` ${result} dny před`;
      }
      return `${result} den před`;
    }
  });

  newTitles.unshift('Po zásnubách');
  newTitles.push('Těsně před svatbou');

  if (timelineInfo.length === newTitles.length) {
    for (let i = 0; i < timelineInfo.length; i++) {
      timelineInfo[i].title = newTitles[i];
    }
  }

  return timelineInfo;
};
