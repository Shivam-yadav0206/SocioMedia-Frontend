import { Box } from "@mui/material";
//import constants from "../constants";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://socio-media-backend.vercel.app/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
