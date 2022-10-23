import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import { textGradient } from '../../utils/cssStyles';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2, 0),
  },
}));

const StyledGradientText = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  backgroundSize: '400%',
  fontFamily: "'Inter', sans-serif",
  fontWeight: 'bold',
  fontSize: `${32 / 12}rem`,
  textAlign: 'center',
  lineHeight: 1,
  padding: 0,
  marginTop: 0,
  marginBottom: 0,
  letterSpacing: 0,
  [theme.breakpoints.up('md')]: {
    fontSize: `${32 / 12}rem`,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHeadline() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 1 },
          }}
        >
          {/* <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              Fundraise Data
            </Typography>
          </m.div> */}

          <m.div variants={varFade().inDown}>
            <Typography variant="h3">
              a realtime tracker of
            </Typography>
            <m.div variants={varFade().in}>
              <StyledGradientText
                animate={{ backgroundPosition: '200% center' }}
                transition={{
                  repeatType: 'reverse',
                  ease: 'linear',
                  duration: 20,
                  repeat: Infinity,
                }}
              >
              fundraise data
              </StyledGradientText>
      </m.div>
          </m.div>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
