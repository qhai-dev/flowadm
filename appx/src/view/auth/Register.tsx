import React from "react";
import { Route } from "react-router-dom"
import Layout from "@/view/auth/view/Layout.tsx";
import Login from '@/view/auth/view/login.tsx'
import SelectIdentity from '@/view/auth/view/select_identity.tsx'

export function RegisterAuthRoute() {
    return  (
        <React.Fragment>
            <Route path="/auth" element={<Layout />}>
                <Route path="login" element={<Login />}></Route>
                <Route path="login/select_identity" element={<SelectIdentity />}></Route>
            </Route>
        </React.Fragment>
    )
}