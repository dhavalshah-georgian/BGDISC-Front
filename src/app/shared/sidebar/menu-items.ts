import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
		path: '/dashboard',
		title: 'Dashboard',
		icon: 'bi bi-speedometer2',
  		class: '',
  		extralink: false,
  		submenu: []
	},
	{
		path: '/datasets',
		title: 'Datasets',
		icon: 'bi bi-list',
  		class: '',
  		extralink: false,
  		submenu: [
            // {
            //     path: '/list',
            //     title: 'List',
            //     icon: 'bi bi-list-ul',
            //     class: '',
            //     extralink: false,
            //     submenu: []
            // }
        ]
	},
    {
        path: '/groups',
        title: 'Group',
        icon: 'bi bi-collection',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/upload',
        title: 'Upload',
        icon: 'bi bi-upload',
        class: '',
        extralink: false,
        submenu: [
            // {
            //     path: '/file-upload',
            //     title: '',
            //     icon: '',
            //     class: '',
            //     extralink: false,
            //     submenu: []
            // },
            // {
            //     path: '/file-upload',
            //     title: '',
            //     icon: '',
            //     class: '',
            //     extralink: false,
            //     submenu: []
            // }
        ]
    },
    {
        path: '/users',
        title: 'Users',
		icon: 'bi bi-people',
  		class: '',
  		extralink: false,
  		submenu: []
    },
    {
        path: '/profile',
		title: 'My Profile',
		icon: 'bi bi-person',
  		class: '',
  		extralink: false,
  		submenu: []
    }
  // {
  //   path: '/dashboard',
  //   title: 'Dashboard',
  //   icon: 'bi bi-speedometer2',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/alert',
  //   title: 'Alert',
  //   icon: 'bi bi-bell',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/badges',
  //   title: 'Badges',
  //   icon: 'bi bi-patch-check',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/buttons',
  //   title: 'Button',
  //   icon: 'bi bi-hdd-stack',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/card',
  //   title: 'Card',
  //   icon: 'bi bi-card-text',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/dropdown',
  //   title: 'Dropdown',
  //   icon: 'bi bi-menu-app',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/pagination',
  //   title: 'Pagination',
  //   icon: 'bi bi-dice-1',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/nav',
  //   title: 'Nav',
  //   icon: 'bi bi-pause-btn',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/table',
  //   title: 'Table',
  //   icon: 'bi bi-layout-split',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/about',
  //   title: 'About',
  //   icon: 'bi bi-people',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // }
];
