import * as React from "react";
import Button from "@mui/material/Button";


function GameButton({ onClick, label, color, size, icon, variante, disabled }) {
  const onButtonClick = () => {
    alert("Congratulations! You successfully hit an unarmed button -.-");
  };

  return (
    <Button
      variant={variante ? variante : "contained"}
      onClick={onClick ? onClick : onButtonClick}
      color={color}
      size={size}
      startIcon={icon}
      disabled={disabled}
      sx={{
        fontSize: "0.8rem",
        whiteSpace: 'normal',
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        hyphens: 'auto',
      }}
    >
       {label}
    </Button>
  );
}

export default GameButton;
