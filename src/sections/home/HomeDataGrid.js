import { Helmet } from "react-helmet-async";
// @mui
import { Box, Container, Stack, Card, CardHeader } from '@mui/material';
import DataGridFunds from '../mui/data-grid/DataGridFunds'

export default function HomeDataGrid() {
    return (
        <>
        <Helmet>
            <title> Funds Datagrid </title>
        </Helmet>

        <Container sx={{ my: 10 }}>
            <Stack spacing={5}>
                <Card>
                    <CardHeader title="Fundraising" sx={{ mb: 2 }}/>
                    <Box sx={{ height: 600 }}>
                        <DataGridFunds/>
                    </Box>
                </Card>
            </Stack>
        </Container>
        </>
    );
}