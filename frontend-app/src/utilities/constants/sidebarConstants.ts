import { AccessTime, DoneAll } from "@mui/icons-material";

interface SidebarItems {
  title: string;
  linkToNavigate: string;
  Icon?: React.ElementType;
}

export const sidebarItems: Array<SidebarItems> = [
  {
    title: "En Progreso",
    linkToNavigate: "open",
    Icon: AccessTime,
  },
  {
    title: "Finalizado",
    linkToNavigate: "close",
    Icon: DoneAll,
  },
];
