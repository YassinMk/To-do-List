import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Box from "@mui/material/Box";

const textFieldStyles = { 
    width: "87%", 
    '& .MuiInputLabel-root': {  // Target the InputLabel component
      fontFamily: "Rubik, sans-serif",  // Set the font family
    },
    '& .MuiInputBase-root': {  // Target the Input component
      fontFamily: "Rubik, sans-serif",  // Set the font family
    },
  };

const CreateTask = () => {
  return (
    
    <Box sx={{position:"fixed" , bottom:"4.2em",width:"605px"}}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginLeft={2.1}
      >
        <TextField
          id="outlined-basic"
          label="Add task"
          variant="outlined"
          sx={textFieldStyles}
          required
         fullWidth
        />
        <AddCircleOutlinedIcon
          sx={{ cursor: "pointer", fontSize: "3rem",color:"rgb(0, 145, 247)",marginRight:".3em",transition: 'transform 0.3s ease-in-out',  // Add a transition to the transform property
          '&:hover': {
            transform: 'scale(1.2)', }}}
        />
      </Stack>
      </Box>

  );
};

export default CreateTask;
