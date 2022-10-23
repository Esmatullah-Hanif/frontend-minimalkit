import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import { 
  Button, 
  Box, 
  Container, 
  Stack,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
 } from '@mui/material';
// utils
import { bgGradient } from '../../utils/cssStyles';
// routes
import { PATH_FREE_VERSION, PATH_MINIMAL_ON_STORE } from '../../routes/paths';
// components
import Iconify from '../../components/iconify';
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const theme = useTheme();

  return (
    <Container component={MotionViewport}>
      <Stack
        alignItems="center"
        sx={{
          ...bgGradient({
            direction: '135deg',
            startColor: theme.palette.primary.main,
            endColor: theme.palette.primary.dark,
          }),
          borderRadius: 2,
          pb: { xs: 5, md: 0 },
        }}
      >
        <Description />
        <Content />
        
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

function Description() {
  return (
    <Box
      sx={{
        textAlign: {
          xs: 'center',
          md: 'center',
        },
      }}
    >
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: 'common.white', mb: 1, p: 2, typography: 'h2' }}
      >
        sign up for the
        <br /> beta release
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'column' }}
        justifyContent={{ xs: 'center', md: 'center' }}
        spacing={2}
      >
        {/* <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size="large"
            variant="contained"
            target="_blank"
            rel="noopener"
            href={PATH_MINIMAL_ON_STORE}
            sx={{
              color: 'grey.800',
              bgcolor: 'common.white',
            }}
          >
            Purchase Now
          </Button>
        </m.div> */}

        {/* <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            target="_blank"
            rel="noopener"
            href={PATH_FREE_VERSION}
            endIcon={<Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />}
            sx={{ color: 'common.white', '&:hover': { borderColor: 'currentColor' } }}
          >
            Get Free Version
          </Button>
        </m.div> */}
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Content() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    
    <Stack component={m.div} variants={varFade().inUp} alignItems="center">
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            type="email"
            margin="dense"
            variant="outlined"
            label="Email Address"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        color="inherit"
        size="large"
        variant="outlined"
        onClick={handleClickOpen}
        rel="noopener"
        startIcon={<Iconify icon="eva:email-outline" width={16} sx={{ mr: 0.5 }} />}
        sx={{ mb: 2, color: 'common.white', '&:hover': { borderColor: 'inherit' }, }}
        >
        Subscribe
      </Button>
    </div>
    </Stack>
  );
}
