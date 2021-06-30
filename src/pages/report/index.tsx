import React from 'react';
import { Card } from 'antd'
import ReportContainer from 'src/containers/report'
import dynamic from 'next/dynamic';
const AppLayout = dynamic(() => import('src/components/layout'), { ssr: false });

const App = () => {
    return (
        <AppLayout title={"Thống kê"} activeMenuKey="/report">
            <Card>
                <ReportContainer />
            </Card>
        </AppLayout>
    )
}


export default (App)