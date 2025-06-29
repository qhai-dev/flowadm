import React from "react";
import { Route } from "react-router-dom"
import Layout from "@/view/workspace/view/Layout.tsx";
import Dashboard from '@/view/workspace/view/Dashboard.tsx'

export function RegisterWorkspaceRoute() {
    return  (
        <React.Fragment>
            <Route path="/workspace" element={<Layout />}>
                <Route index element={<Dashboard />}></Route>
            </Route>
        </React.Fragment>
    )
}