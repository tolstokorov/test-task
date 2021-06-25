export default [
  {
    _tag: 'CSidebarNavTitle',
    name: 'Users',
    to: '/users',
    badge: {
      color: 'info',
      text: 'USERS',
    },
    _children: ['Users']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users list',
    to: '/users',
    icon: 'cil-list',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Add user',
    to: '/users-add',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

