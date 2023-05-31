export const getErrorMessage = (error) => {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    return "Something went wrong";
  }
};
