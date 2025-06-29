import {BrowserRouter, Route, Routes } from 'react-router-dom';

import RootLayout from "@/view/Root.tsx";
import NotFound from '@/view/404.tsx'

import { RegisterAuthRoute } from '@/view/auth/Register.tsx'
import { RegisterDatasetRoute } from '@/view/dataset/Register.tsx'
import { RegisterWorkspaceRoute } from '@/view/workspace/Register.tsx'

export const RegisterRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    {RegisterWorkspaceRoute()}
                    {RegisterDatasetRoute()}
                </Route>
                {RegisterAuthRoute()}
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}