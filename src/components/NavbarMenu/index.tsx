"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import * as React from "react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";
import { Button } from "../ui/Button";
import LogoutIcon from "../ui/icons/LogoutIcon";
import UserCircleIcon from "../ui/icons/UserCircleIcon";

enum ModeType {
  LIGHT = "Light",
  DARK = "Dark",
}

export function NavbarMenu() {
  const [modeType, setModeType] = React.useState(ModeType.LIGHT);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    if (!!modeType) {
      setTheme(modeType.toLowerCase());
    }
  }, [modeType]);

  const handleModeType = () => {
    setModeType((prev) => (prev === ModeType.LIGHT ? ModeType.DARK : ModeType.LIGHT));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="w-10 border-none bg-transparent hover:bg-transparent focus:outline-none focus:border-transparent"
        >
          <UserCircleIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="font-custom text-icon dark:text-icon" onClick={handleModeType}>
          {modeType === ModeType.LIGHT ? (
            <SunIcon width={20} className="text-icon dark:text-icon" />
          ) : (
            <MoonIcon width={20} className="text-icon dark:text-icon" />
          )}
          &nbsp; {modeType} Mode
        </DropdownMenuItem>
        <DropdownMenuItem
          className="font-custom text-icon dark:text-icon"
          onClick={() => {
            console.log("hola");
          }}
        >
          <LogoutIcon /> &nbsp; Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
