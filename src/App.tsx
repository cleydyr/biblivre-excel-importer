import React from "react"

import '@elastic/eui/dist/eui_theme_light.css';

import { EuiFilePicker, EuiProvider } from "@elastic/eui";

export default () => {
    return (
        <EuiProvider colorMode="light">
            <>
                <EuiFilePicker></EuiFilePicker>
            </>
        </EuiProvider>
    )
}

