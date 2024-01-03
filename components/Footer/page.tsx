"use client";
import * as React from "react";
import { ColorPaletteProp } from "@mui/joy/styles";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import { Logo } from "..";

import { shopBy, usefulLinks } from "./constant";
import Link from "next/link";

export default function Footer() {
  return (
    <Sheet
      className="bg-black"
      variant="solid"
      invertedColors
      sx={{
        flexGrow: 1,
        py: 2,
        px: {
          xs: "5%",
          md: "10%",
        },
        mt: 8,
      }}
      style={{ color: "white" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Logo />
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton variant="plain">
          <GitHubIcon />
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: "row", md: "column" },
            minWidth: { xs: "100%", md: "auto" },
            maxWidth: { xs: "100%", md: 500 },
            gap: 1,
          }}
        >
          <CardContent>
            <Typography level="body-sm">
              PATHOK POINT IS A RENOWNED PLATFORM THAT PROVIDES OLD & NEW BOOKS
              AT YOUR DOORSTEP
            </Typography>
          </CardContent>
        </Card>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{
            flexGrow: 0,
            "--ListItem-radius": "8px",
            "--ListItem-gap": "0px",
          }}
        >
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>Shop By</ListSubheader>
            <List>
              {shopBy.map((item, index) => (
                <ListItem key={index}>
                  <ListItemButton>{item.title}</ListItemButton>
                </ListItem>
              ))}
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>
              Useful Links
            </ListSubheader>
            <List sx={{ "--ListItemDecorator-size": "32px" }}>
              {usefulLinks.map((item, index) => (
                <ListItem key={index}>
                  <ListItemButton>{item.title}</ListItemButton>
                </ListItem>
              ))}
            </List>
          </ListItem>

          {/* Contact with us */}
          <ListItem nested sx={{ width: { xs: "50%", md: 250 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>Contact Us</ListSubheader>
            <List>
              <ListItem>
                <Typography>
                  Head office: House-4/7, Av-3, Mirpur-11, Dhaka -1216
                </Typography>
              </ListItem>

              <ListItem>
                <Link href="mailto:contact@pathokpoint.com">
                  <ListItemButton>
                    Email: contact@pathokpoint.com
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem>
                <Link href="tel:+8801686347168">
                  <ListItemButton>Phone: +880 1686 - 347 168</ListItemButton>
                </Link>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
