export const scrollbarStyle = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "2em",
    overflowY: "auto",
    height: "350px",
    marginTop: ".5em",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#7a9efa",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#7b9efb",
    },
};
export const CardStyles = {
    maxWidth: 605,
    height: 590,
    bgcolor: "white",
    width: "100%",
    padding: ".85em",
    fontFamily: " Rubik, sans-serif",
    paddingBottom: "1em",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    borderRadius: "17px",
  };
export const textFieldStyles = {
    color: "rgb(37, 47, 136)",
    fontFamily: "Rubik, sans-serif",
    "& .MuiInputLabel-root": {
      fontFamily: "Rubik, sans-serif",
    },
};