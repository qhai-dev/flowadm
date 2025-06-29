import React from "react";
import { Route } from "react-router-dom"

import DatasetLayout from "@/view/dataset/view/Layout.tsx";
import CreateDataset from '@/view/dataset/view/create.tsx'
import Datasets from '@/view/dataset/view/datasets.tsx'
import Document from '@/view/dataset/view/document.tsx'
import HitTesting from '@/view/dataset/view/hitTesting.tsx'
import Setting from '@/view/dataset/view/setting.tsx'

export function RegisterDatasetRoute() {
    return (
        <React.Fragment>
            <Route path="datasets" element={<Datasets />}></Route>
            <Route path="dataset/create" element={<CreateDataset />}></Route>
            <Route path="dataset/:id" element={<DatasetLayout />}>
                <Route path="documents" element={<Document />}></Route>
                <Route path="hitTesting" element={<HitTesting />}></Route>
                <Route path="settings" element={<Setting />}></Route>
            </Route>
        </React.Fragment>
    )
}