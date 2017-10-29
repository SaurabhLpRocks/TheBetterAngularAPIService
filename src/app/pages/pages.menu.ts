export const pagesMenu = [
  {
    path: 'pages',
    children: [
      {
        path: 'superAdmin',
        data: {
          menu: {
            title: 'Super Admin',
            menuFor: 'sidebar',
            hidden: false,
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 0,
            isCustomRoute: false,
            customRoute: null,
            queryStringParams: null,
            menuName: 'SuperAdmin',
          },
        },
        children: [],
      },
      {
        path: 'admin',
        data: {
          menu: {
            title: 'Admin',
            menuFor: 'sidebar',
            hidden: false,
            icon: 'fa fa-users',
            selected: false,
            expanded: false,
            order: 0,
            isCustomRoute: false,
            customRoute: null,
            queryStringParams: null,
            menuName: 'Admin',
          },
        },
        children: [
          {
            path: 'dashboard',
            data: {
              menu: {
                title: 'Dashboard',
                menuFor: 'sidebar',
                icon: 'fa fa-cog',
                menuName: 'AdminDashboard',
              },
            },
          },
          {
            path: 'manage',
            data: {
              menu: {
                title: 'Manage',
                menuFor: 'sidebar',
                icon: 'fa fa-cog',
                menuName: 'ViewAdmins',
              },
            },
          },
        ],
      },
    ],
  },
];
