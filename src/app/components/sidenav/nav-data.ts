import { INavbarData } from "./helper";

export const navbarData : INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'products',
        icon: 'fa fa-database',
        label: 'Products'
    },
    {
        routeLink: 'statistics',
        icon: 'fa fa-bar-chart',
        label: 'Statistics'
    },
    {
        routeLink: 'coupons',
        icon: 'fa fa-tags',
        label: 'Coupons',
        // expanded: true,
        // items: [
        //     {
        //         routeLink: 'coupons/list',
        //         label: 'List Coupons'
        //     },
        //     {
        //         routeLink: 'coupons/create',
        //         label: 'Create Coupons'
        //     }
        // ]
    },
    {
        routeLink: 'pages',
        icon: 'fa fa-file',
        label: 'Pages'
    },
    {
        routeLink: 'media',
        icon: 'fa fa-camera',
        label: 'Media'
    }, 
    {
        routeLink: 'settings',
        icon: 'fa fa-cog',
        label: 'Settings'
    },
];



