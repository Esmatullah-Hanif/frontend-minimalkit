// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Fundraise Data',
    items: [
      { title: 'Features', path: PATH_DASHBOARD.one },
      { title: 'About', path: PATH_DASHBOARD.two },
      // { title: 'Pricing', path: PATH_DASHBOARD.three },
      {
        title: 'Use Cases',
        path: PATH_DASHBOARD.user.root,
        // icon: ICONS.user,
        children: [
          { title: 'explore companies', path: PATH_DASHBOARD.user.four },
          { title: 'find jobs', path: PATH_DASHBOARD.user.five },
        ],
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [

  //   ],
  // },
];

export default navConfig;
