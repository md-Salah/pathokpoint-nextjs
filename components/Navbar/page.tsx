import Link from "next/link";
import { Box, Stack } from "@mui/material";
import { Menu, Search, ShoppingCartOutlined } from "@mui/icons-material";

import { SearchBar, Logo } from "../../components";

const Navbar = () => {
  const MenuButton = () => (
    <div className="flex justify-center items-center">
      <Menu />
    </div>
  );

  const SearchButton = () => (
    <div className="flex items-center">
      <Link
        href="#"
        className="rounded-full p-1 flex items-center justify-center"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Search />
      </Link>
    </div>
  );

  const CartButton = ({ item }: { item: number }) => (
    <div className="flex items-center relative">
      <Link
        href="#"
        className="rounded-full p-1 flex items-center justify-center"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <ShoppingCartOutlined />

        {item > 0 && (
          <div
            className="font-bold absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full flex items-center justify-center"
            style={{
              width: "18px",
              height: "18px",
              top: "-4px",
              right: "-4px",
              fontSize: "10px",
            }}
          >
            {item}
          </div>
        )}
      </Link>
    </div>
  );

  return (
    <Box
      className="bg-white w-full flex justify-between items-center fixed top-0 z-10"
      sx={{
        height: {
          xs: "50px",
          xl: "60px",
        },
        paddingX: {
          xs: "5%",
          sm: "10%",
        },
      }}
    >
      <Logo />
      <Stack direction="row" spacing={2}>
        <SearchButton />

        <CartButton item={0} />

        <MenuButton />
      </Stack>
    </Box>
  );
};

export default Navbar;
