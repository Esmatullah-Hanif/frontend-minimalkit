import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Tab, Card, Tabs, Container, Box, Grid } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../routes/paths';
// auth
// import { useAuthContext } from '../../auth/useAuthContext';
// _mock_
import { _userAbout, _userFeeds, _userFriends, _userGallery, _userFollowers } from '../_mock/arrays';
// components
import Iconify from '../components/iconify';
import CustomBreadcrumbs from '../components/custom-breadcrumbs/CustomBreadcrumbs';
import { useSettingsContext } from '../components/settings/SettingsContext';
// sections
import {
  Profile,
  ProfileCover,
  ProfileFriends,
  ProfileGallery,
  ProfileFollowers,
} from '../sections/@dashboard/user/profile';
import { AppAreaInstalled } from '../sections/@dashboard/general/app';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  const { themeStretch } = useSettingsContext();

  const { user } = ('test');

  const [searchFriends, setSearchFriends] = useState('');

  const [currentTab, setCurrentTab] = useState('profile');

  const TABS = [
    {
      value: 'profile',
      label: 'Profile',
      // icon: <Iconify icon="ic:round-account-box" />,
      component: <Profile info={_userAbout} posts={_userFeeds} />,
    },
    {
      value: 'friends',
      label: 'Key people',
      // icon: <Iconify icon="eva:people-fill" />,
      component: (
        <ProfileFriends
          friends={_userFriends}
          searchFriends={searchFriends}
          onSearchFriends={(event) => setSearchFriends(event.target.value)}
        />
      ),
    },
    {
      value: 'followers',
      label: 'Followers',
      // icon: <Iconify icon="eva:heart-fill" />,
      component: <ProfileFollowers followers={_userFollowers} />,
    },
    // {
    //   value: 'gallery',
    //   label: 'Gallery',
    //   icon: <Iconify icon="ic:round-perm-media" />,
    //   component: <ProfileGallery gallery={_userGallery} />,
    // },
  ];

  return (
    <>
      <Helmet>
        <title> Tesla </title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Company details"
          links={[
            { name: 'Company', href: PATH_DASHBOARD.root },
            { name: 'Tesla', href: PATH_DASHBOARD.user.root },
            { name: user?.displayName },
          ]}
        />
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: 'relative',
          }}
        >
          <ProfileCover name='Tesla' role={_userAbout.role} cover={_userAbout.cover} />

          <Tabs
            value={currentTab}
            onChange={(event, newValue) => setCurrentTab(newValue)}
            sx={{
              width: 1,
              bottom: 0,
              zIndex: 9,
              position: 'absolute',
              bgcolor: 'background.paper',
              '& .MuiTabs-flexContainer': {
                pr: { md: 3 },
                justifyContent: {
                  sm: 'center',
                  md: 'flex-end',
                },
              },
            }}
          >
            {TABS.map((tab) => (
              <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
            ))}
          </Tabs>
        </Card>

        {TABS.map((tab) => tab.value === currentTab && <Box key={tab.value}> {tab.component} </Box>)}
      </Container>
    </>
  );
}
