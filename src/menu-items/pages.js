// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'logout',
          title: 'logout',
          type: 'item',
          url: '/pages/logout',
          target: true
        }
        
        
      ]
    }
  ]
};

export default pages;
