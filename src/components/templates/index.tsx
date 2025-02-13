import React from "react";
import AddNew from "./parts/AddNew";
import ThemeItem from "./parts/ThemeItem";
import { Stack } from "@mui/material";

const TemplatesTest = () => {
    return (
        <React.Fragment>
            <Stack direction={"row"} spacing={2}>
                <AddNew />
                <ThemeItem />
            </Stack>
        </React.Fragment>
    )
}

export default TemplatesTest