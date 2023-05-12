import { AccessTime, DoneAll } from "@mui/icons-material";

interface SidebarItems {
  title: string;
  linkToNavigate: string;
  Icon?: React.ElementType;
}

export const sidebarItems: Array<SidebarItems> = [
  {
    title: "In Progress",
    linkToNavigate: "open",
    Icon: AccessTime,
  },
  {
    title: "Finished",
    linkToNavigate: "close",
    Icon: DoneAll,
  },
];
