

export const formatDate = (date:string | Date) => {
    const newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset());
    const format = newDate.toLocaleDateString('en-US', {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return format
  }