import React from 'react';
import { Card } from 'antd'
import RuleContainer from 'src/containers/rule'
import dynamic from 'next/dynamic';
const AppLayout = dynamic(() => import('src/components/layout'), { ssr: false });

function App() {
    return (
        <AppLayout title={"Qui Định"} activeMenuKey="/rules">
            <Card>
                <RuleContainer />
            </Card>
        </AppLayout>
    )
}
export default (App)
