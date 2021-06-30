import React from 'react';
import { Card } from 'antd'
import SavingContainer from 'src/containers/saving'
import dynamic from 'next/dynamic';
const AppLayout = dynamic(() => import('src/components/layout'), { ssr: false });

function App() {
    return (
        <AppLayout title={"Số tiết kiệm"} activeMenuKey="/saving">
            <Card>
                <SavingContainer />
            </Card>
        </AppLayout>
    )
}


export default (App)