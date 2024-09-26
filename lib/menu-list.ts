import {
  LayoutGrid,
  LucideIcon,
  ClipboardCheck,
  CalendarDays,
  ReceiptText,
  Receipt,
  ChartColumnBig,
  Building2,
  AlignVerticalSpaceBetween,
  UserRoundSearch,
  Database,
  File,
  BriefcaseBusiness,
  FileSpreadsheet
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Accueil",
          active: pathname.includes("/home"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contenu",
      menus: [
        {
          href: "/tasks",
          label: "Taches",
          active: pathname.includes("/tasks"),
          icon: ClipboardCheck,
          submenus: [
            // {
            //   href: "/posts",
            //   label: "All Posts",
            //   active: pathname === "/posts"
            // },
            // {
            //   href: "/posts/new",
            //   label: "New Post",
            //   active: pathname === "/posts/new"
            // }
          ]
        },
        {
          href: "/interventions",
          label: "Interventions",
          active: pathname.includes("/interventions"),
          icon: CalendarDays,
          submenus: []
        },
        {
          href: "/missions",
          label: "Missions et contrats",
          active: pathname.includes("/missions"),
          icon: ReceiptText,
          submenus: []
        },
        {
          href: "/turnover",
          label: "Suivi CA",
          active: pathname.includes("/turnover"),
          icon: Receipt,
          submenus: []
        },
        {
          href: "/billing",
          label: "Facturation",
          active: pathname.includes("/billing"),
          icon: FileSpreadsheet,
          submenus: []
        },
        {
          href: "/bpf",
          label: "Bilan pédagogique et financier",
          active: pathname.includes("/bpf"),
          icon: ChartColumnBig,
          submenus: []
        },
        {
          href: "/formations",
          label: "Organismes de formation",
          active: pathname.includes("/formations"),
          icon: Building2,
          submenus: []
        },
        {
          href: "/intermediate",
          label: "Intermédiaires",
          active: pathname.includes("/intermediate"),
          icon: AlignVerticalSpaceBetween,
          submenus: []
        },
        {
          href: "/contacts",
          label: "Contacts",
          active: pathname.includes("/contacts"),
          icon: UserRoundSearch,
          submenus: []
        },
        {
          href: "/lessons",
          label: "Cours en stocks",
          active: pathname.includes("/lessons"),
          icon: Database,
          submenus: []
        },
        {
          href: "/documents",
          label: "Mes documents",
          active: pathname.includes("/documents"),
          icon: File,
          submenus: []
        },
        {
          href: "/applications",
          label: "Candidatures",
          active: pathname.includes("/applications"),
          icon: BriefcaseBusiness,
          submenus: []
        },
      ]
    }
  ];
}
