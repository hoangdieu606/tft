"use client";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useState } from "react";

interface IconTooltipProps {
  tooltipContent: React.ReactNode; // Nội dung tooltip
  className?: string; // Class cho div bọc
  children: React.ReactNode; // Thẻ Image hoặc component khác được truyền vào
}

export default function IconTooltip({
  tooltipContent,
  className = "",
  children,
}: IconTooltipProps) {
  const [open, setOpen] = useState(false);

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        title={tooltipContent}
        placement="top"
        open={open}
        onClose={handleTooltipClose}
        onOpen={handleTooltipOpen}
        disableFocusListener
        disableTouchListener
        disableInteractive
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "flip",
                enabled: true,
                options: {
                  fallbackPlacements: ["bottom"],
                },
              },
            ],
          },
        }}
      >
        <div
          onClick={handleTooltipOpen}
          className={className}
          role="button"
          aria-label="View details"
        >
          {children}
        </div>
      </Tooltip>
    </ClickAwayListener>
  );
}