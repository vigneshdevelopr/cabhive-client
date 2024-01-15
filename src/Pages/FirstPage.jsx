import React, { useState } from "react";
import Base from "./Base/Base";
import "../Styles/FirstPage.css";
import {
  Backdrop,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Auth from "../Templates/Auth";
import CloseIcon from '@mui/icons-material/Close';
import SignUp from "../Templates/Register";



function FirstPage() {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloses = () => {
    setOpens(false);
  };
  const handleOpens = () => {
    setOpens(true);
  };

  const data = [
    {
      head: "Ride anytime, anywhere",
      description:
        "You can Ride and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly.",
    },
    {
      head: "Set your own schedule",
      description:
        "Only drive when it works for you. There’s no office and no boss. That means you’ll always start and stop on your time—because with Cabhive, you’re in charge.",
    },
    {
      head: "Safety behind the wheel",
      description:
        "Cabhive is dedicated to keeping people safe on the road. Our technology enables us to focus on driver safety before, during, and after every trip.",
    },
  ];
  return (
    <Base>
      <div className="margin">
        <Grid container>
          <Grid item md={6} xs={12}>
            <div className="drive">
              <h1>Ride with Cabhive !</h1>

              <p>Excelling in driving you to your destination</p>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <img
              id="login_img"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_666,h_444/v1656511866/assets/67/3b671f-4ccd-484a-ad97-cded31823ed0/original/illustration-safety-01-1.png"
              alt="login"
            />
          </Grid>
        </Grid>
      </div>
      <div className="second_margin">
        <Grid container>
          <Grid item xs={6}>
            <div onClick={handleOpens} className="signup">
              <div style={{ marginLeft: "10px" }}>Signup</div>

              <div className="arrow_icon">
                <ArrowRightAltIcon />
              </div>
            </div>
            <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={opens}
      >
        <div className="signin_container">
<CloseIcon className="handleclose" onClick={handleCloses}  />
        <SignUp />  

        </div>
      </Backdrop>
          </Grid>
          <Grid item xs={6}>
            <div onClick={handleOpen} className="signup">
              <div style={{ marginLeft: "10px" }}>Login</div>
              <div className="arrow_icon">
                <ArrowRightAltIcon />
              </div>
            </div>
            <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div className="signin_container">
<CloseIcon className="handleclose" onClick={handleClose}  />
        <Auth />  

        </div>
      </Backdrop>
          </Grid>
        </Grid>
      </div>
      <div className="third_margin">
        <h2>Ride When you want</h2>
        <div className="cards">
          {data.map((key, id) => (
            <Card style={{ maxWidth: "10cm" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 16, color: "black", fontWeight: "bold" }}
                  gutterBottom
                >
                  {key.head}
                </Typography>
                <Typography variant="h4" component="div"></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {key.description}
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          ))}
        </div>
      </div>
      <div className="footer">
        
        <div className="title">
            CabHive

            
        </div>
        <main className="title">
                Visit Help Center
            </main>
            <Grid container className="list_items">
                <Grid item xs>
                    <ul>
                        <h4>Company</h4>
                        <li>About us</li>
                        <li>Our Offering</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Newsroom</li>
                    </ul>
                </Grid>
                <Grid item xs>
                    <ul>
                   <h4> Products</h4>
                        <li>Ride</li>
                        <li>Drive</li>
                        <li>Admin Dashboard</li>
                        
                    </ul>
                </Grid>
                <Grid item xs>
                    <ul>
                    <h4>Global citizenship</h4>
                        <li>Safety</li>
                        <li>Diversity and Inclusion</li>
                        
                    </ul>
                </Grid>
                <Grid item xs>
                    <ul>
                    <h4>Travel</h4>
                        <li>Cities</li>
                        <li>Airports</li>
                        <li>Railway Station</li>
                        <li>Bus Station</li>
                    </ul>
                </Grid>
            </Grid>
      </div>
    </Base>
  );
}

export default FirstPage;
