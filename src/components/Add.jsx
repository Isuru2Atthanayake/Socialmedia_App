import { Fab,Box,Tooltip,Modal, Typography, Avatar, TextField, ButtonGroup, Button } from '@mui/material';
import {useState} from "react";
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import styled from '@emotion/styled';
import img1 from '../images/girl.png';
import { Stack } from '@mui/system';


const StyledModal = styled(Modal)({
  display:"flex",
  alignItems: "center",
  justifyContent: "center",
})
const UserBox = styled(Box)({
  display:"flex",
  alignItems: "center",
  gap: "10px",
  marginbottom: "20px"
})
const Add = () => {
const[open,setOpen] = useState(false)
  return (
    <>
        <Tooltip onClick={e => setOpen(true)} title="Add Items" sx={{position: 'fixed', bottom:20 ,left:{xs:"calc(50% -25px)", md:30},}}>
            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography varient="h6" color="gray" text align="center" >Create post</Typography>
          <UserBox>
            <Avatar alt="Travis Howard" src={img1} />
              <Typography fontWeight={200} variant="span">Stephany Smith</Typography>
          </UserBox>
            <TextField
              mt={10}
              sx ={{width:"100%"}}
              id="standard-multiline-static"
              multiline
              rows={3}
              defaultValue="What's on your mind?"
              variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary"/>
              <Image color="secondary" />
              <VideoCameraBack color="success"/>
              <PersonAdd color="error"/>
          </Stack>
          <ButtonGroup fullWidth variant="contained" color="primary" aria-label="contained primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
              <DateRange/>
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
export default Add;

