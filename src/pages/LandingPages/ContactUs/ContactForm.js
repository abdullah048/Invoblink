import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import ContactUsImage from "assets/images/contact.png";
import { FormControl } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [messages, setMessages] = useState("");
  const [subject, setSubject] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const handleSubmit = async (e) => {
    // console.log(e)
    e.preventDefault();
    try {
      const response = await axios.post("/addDetails", {
        fullName,
        email,
        subject,
        messages,
      });
      message.success(response.data.message);
      if (response.data.message) {
        setFullName("");
        setEmail("");
        setMessages("");
        setSubject("");
      } else {
        return response.data;
      }
      console.log(response, "response");
      // setFullName(), setEmail(), setSubject(), setMessage();
    } catch (error) {
      message.error("Details creation failed");
    }
  };
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      mt={{ xs: 1, sm: 1, md: 5, lg: 5 }}
      mb={{ xs: 2, sm: 2, md: 5, lg: 8 }}
    >
      {/* {contextHolder} */}
      <Grid item xs={0} sm={0} md={2} lg={1} xl={1}></Grid>
      <Grid item xs={0} sm={0} md={0} lg={4} xl={5}>
        <MKBox display={{ xs: "none", lg: "flex" }} borderRadius="lg">
          <img
            src={ContactUsImage}
            alt="image"
            style={{ margin: "auto", overflow: "hidden" }}
          />
        </MKBox>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={6} xl={5}>
        <MKBox
          bgColor="white"
          borderRadius="xl"
          shadow="lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          // mx={5}
          // sx={{ margin: "auto" }}
        >
          <MKBox
            variant="gradient"
            bgColor="info"
            coloredShadow="info"
            borderRadius="lg"
            p={2}
            mx={2}
            mt={-3}
          >
            <MKTypography variant="h3" color="white">
              Contact us
            </MKTypography>
          </MKBox>
          <MKBox p={3}>
            <MKTypography variant="body2" color="text" mb={3}>
              For further questions & inquiries, please email us at
              info@devstrings.com or contact us using our contact form.
            </MKTypography>
            <FormControl onSubmit={handleSubmit}>
              <MKBox
                width="100%"
                component="form"
                method="post"
                autoComplete="off"
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Subject?"
                      placeholder="Your Subject"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="How can we help you?"
                      placeholder="Your Message"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                      value={messages}
                      onChange={(e) => setMessages(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  justifyContent="center"
                  xs={12}
                  mt={5}
                  mb={2}
                >
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </FormControl>
          </MKBox>
        </MKBox>
      </Grid>
      <Grid item xs={0} sm={0} md={2} lg={1} xl={1}></Grid>
    </Grid>
  );
}

export default ContactForm;
