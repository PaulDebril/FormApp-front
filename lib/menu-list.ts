import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon
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
          active: pathname.includes("/"),
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
          icon: SquarePen,
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
          icon: Bookmark,
          submenus: []
        },
        {
          href: "/missions",
          label: "Missions et contrats",
          active: pathname.includes("/missions"),
          icon: Tag,
          submenus: []
        },
        {
          href: "/suivi-ca",
          label: "Suivi CA",
          active: pathname.includes("/suivi-ca"),
          icon: Tag,
          submenus: []
        },
        {
          href: "/billing",
          label: "Facturation",
          active: pathname.includes("/billing"),
          icon: Tag,
          submenus: []
        },
        {
          href: "/bpf",
          label: "Bilan pédagogique et financier",
          active: pathname.includes("/bpf"),
          icon: Tag,
          submenus: []
        },
        {
          href: "/formations",
          label: "Organismes de formation",
          active: pathname.includes("/formations"),
          icon: Tag,
          submenus: []
        },
        {
          href: "/intermediate",
          label: "Intermédiaires",
          active: pathname.includes("/intermediate"),
          icon: Tag,
          submenus: []
        },
        {
          href: "/contacts",
          label: "Contacts",
          active: pathname.includes("/contacts"),
          icon: Tag,
          submenus: []
        },
        {
          href: "/inventory",
          label: "Courants stocks",
          active: pathname.includes("/inventory"),
          icon: Tag,
          submenus: []
        },
        {
          href: "/documents",
          label: "Mes documents",
          active: pathname.includes("/documents"),
          icon: Tag,
          submenus: []
        },
        {
          href: "/applications",
          label: "Candidatures",
          active: pathname.includes("/applications"),
          icon: Tag,
          submenus: []
        },
      ]
    }
  ];
}
