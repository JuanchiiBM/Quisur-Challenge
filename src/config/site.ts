export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Challenge QiSur",
    description: "Página para reto de ingreso a Qisur",
    navItems: [
        {
            label: "Home",
            href: "/",
            icon: "fa-solid:home"
        },
        {
            label: "Tabla",
            href: "/tabla",
            icon: "gravity-ui:list-ol"
        },
        {
            label: "Vista",
            href: "/vista",
            icon: "gridicons:line-graph"
        },
    ],
    links: {
        github: "https://github.com/frontio-ai/heroui",
        twitter: "https://twitter.com/hero_ui",
        docs: "https://heroui.com",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
    },
};
