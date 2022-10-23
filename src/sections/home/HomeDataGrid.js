import { Helmet } from "react-helmet-async";
// @mui
import { Box, Container, Stack, Card, CardHeader } from '@mui/material';
import DataGridFunds  from '../mui/data-grid/DataGridFunds';
import DataGridFundsCustom from '../mui/data-grid/DataGridFundsCustom';

export default function HomeDataGrid() {
    return (
        <>
        <Helmet>
            <title> Fundraise data </title>
        </Helmet>

        <Container sx={{ my: 10 }}>
            <Stack spacing={5}>
                <Card>
                    <CardHeader title="Recent fundraising" sx={{ mb: 2 }}/>
                    <Box sx={{ height: 600 }}>
                        <DataGridFunds/>
                    </Box>
                </Card>
                {/* <Card>
                    <CardHeader title="Fundraising Custom" sx={{ mb: 2 }}/>
                    <Box sx={{ height: 600 }}>
                        <DataGridFundsCustom/>
                    </Box>
                </Card> */}
            </Stack>
        </Container>
        </>
    );
}