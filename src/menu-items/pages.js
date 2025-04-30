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
          title: 'Logout',
          type: 'item',
          url: '#', // prevent actual navigation
          target: false,
          onClick: () => {
            const confirmed = window.confirm('Are you sure you want to exit?');
            if (confirmed) {
              window.location.href = '/pages/login'; // Full reload or use router navigation
            }
          }
        }
        
        
        
      ]
    }
  ]
};

export default pages;
