import React from 'react';
import { Card } from 'antd'
import WithdrawalContainer from 'src/containers/withdrawal'
import dynamic from 'next/dynamic';
const AppLayout = dynamic(() => import('src/components/layout'), { ssr: false });

function App() {
    return (
        <AppLayout title={"Rút tiền"} activeMenuKey="/withdrawal">
            <Card>
                <WithdrawalContainer />
            </Card>
        </AppLayout>
    )
}


export default (App)