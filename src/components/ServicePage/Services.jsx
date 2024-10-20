

 import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HeaderService from './HeaderService';
export default function AlignItemsList() {
  return (
    <>
      <HeaderService style={{postion:"fixed"}} />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Button
          style={{
            backgroundColor: "#F7EFF2",
            width: "100%",
            borderRadius: "30px",
            color: "black",
            fontSize: "bold",

            padding: "15px",
          }}
        >
          {" "}
          Nail Care Services
        </Button>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="static/images/99.png"
              style={{ width: "113px", height: "113px", borderRadius: "12px" }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: "12px" }}
            primary="Gel anatomy"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontSize: "bold",
                    display: "inline",
                  }}
                >
                  1 hour, 30 mins
                  <br />
                </Typography>
                {"  ₪100"}
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#E4A3C2",
                      left: "70%",
                      "&:hover": {
                        backgroundColor: "#e0d0d3",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="static/images/8.png"
              style={{ width: "113px", height: "113px", borderRadius: "12px" }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: "12px" }}
            primary="Russian fake nails"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontSize: "bold",
                    display: "inline",
                  }}
                >
                  2 hours
                  <br />
                </Typography>
                {"  ₪150"}
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#E4A3C2",
                      left: "70%",
                      "&:hover": {
                        backgroundColor: "#e0d0d3",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="static/images/77.png"
              style={{ width: "113px", height: "113px", borderRadius: "12px" }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: "12px" }}
            primary="Fake nails with gel"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontSize: "bold",
                    display: "inline",
                  }}
                >
                  1 hour, 30 mins
                  <br />
                </Typography>
                {"  ₪100"}
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#E4A3C2",
                      left: "70%",
                      "&:hover": {
                        backgroundColor: "#e0d0d3",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="static/images/66.png"
              style={{ width: "113px", height: "113px", borderRadius: "12px" }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: "12px" }}
            primary=" Gel nail extension"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontSize: "bold",
                    display: "inline",
                  }}
                >
                  2 hours, 30 mins
                  <br />
                </Typography>
                {"  ₪250"}
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#E4A3C2",
                      left: "70%",
                      "&:hover": {
                        backgroundColor: "#e0d0d3",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="static/images/55.png"
              style={{ width: "113px", height: "113px", borderRadius: "12px" }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: "12px" }}
            primary="Regular manicure"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontSize: "bold",
                    display: "inline",
                  }}
                >
                  30 mins
                  <br />
                </Typography>
                {"  ₪50"}
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#E4A3C2",
                      left: "70%",
                      "&:hover": {
                        backgroundColor: "#e0d0d3",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
        <Button
          style={{
            backgroundColor: "#F7EFF2",
            width: "100%",
            borderRadius: "30px",
            color: "black",
            fontSize: "bold",
            padding: "15px",
          }}
        >
          {" "}
          Pedicure
        </Button>

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="static/images/p1.png"
              style={{ width: "113px", height: "113px", borderRadius: "12px" }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: "12px" }}
            primary="Classic spa pedicure without color"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontSize: "bold",
                    display: "inline",
                  }}
                >
                  45 mins
                  <br />
                </Typography>
                {"  ₪50"}
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#E4A3C2",
                      left: "70%",
                      "&:hover": {
                        backgroundColor: "#e0d0d3",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="static/images/p2.png"
              style={{ width: "113px", height: "113px", borderRadius: "12px" }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: "12px" }}
            primary="Classic spa pedicure with nail polish"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontSize: "bold",
                    display: "inline",
                  }}
                >
                  1 hour, 30 mins
                  <br />
                </Typography>
                {"  ₪100"}
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#E4A3C2",
                      left: "70%",
                      "&:hover": {
                        backgroundColor: "#e0d0d3",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="static/images/p3.png"
              style={{ width: "113px", height: "113px", borderRadius: "12px" }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: "12px" }}
            primary="Classic spa pedicure with gel"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontSize: "bold",
                    display: "inline",
                  }}
                >
                  2 hours
                  <br />
                </Typography>
                {"  ₪150"}
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#E4A3C2",
                      left: "70%",
                      "&:hover": {
                        backgroundColor: "#e0d0d3",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="static/images/0.png"
              style={{ width: "113px", height: "113px", borderRadius: "12px" }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: "12px" }}
            primary="La Suite pedicure without color"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontSize: "bold",
                    display: "inline",
                  }}
                >
                  2 hours, 30 mins
                  <br />
                </Typography>
                {"  ₪250"}
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#E4A3C2",
                      left: "70%",
                      "&:hover": {
                        backgroundColor: "#e0d0d3",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>

        <Button
          style={{
            backgroundColor: "#F7EFF2",
            width: "100%",
            borderRadius: "30px",
            color: "black",
            fontSize: "bold",
            padding: "15px",
          }}
        >
          Lashes, Brows & Permanent Makeup
        </Button>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="static/images/Lashes.png"
              style={{ width: "113px", height: "113px", borderRadius: "12px" }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: "12px" }}
            primary="Gel Anatomy"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    fontSize: "bold",
                    display: "inline",
                  }}
                >
                  30 mins
                  <br />
                </Typography>
                {"  ₪50"}
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#E4A3C2",
                      left: "70%",
                      "&:hover": {
                        backgroundColor: "#e0d0d3",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
}

