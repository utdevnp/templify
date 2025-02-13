import { Stack, Typography } from "@mui/material";

const ThemeItem = () => {
    return (
        <Stack spacing={2}  direction="row" sx={{
            border: 1,
            borderRadius: 1,
            borderColor: 'grey.500',
            borderStyle: 'dashed',
            cursor: 'pointer',
           }}  height={200} width={150} alignItems="center" justifyContent="center">
                <Typography variant="h6">Add New</Typography>
        </Stack>
    );
}

export default ThemeItem;