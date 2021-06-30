import React from 'react';
import { Card } from 'antd'
import CustomerContainer from 'src/containers/customer'
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('src/components/layout'), { ssr: true });
function App() {
    return (
        <AppLayout title={"Khách hàng"} activeMenuKey="/customers">
            <Card>
                <CustomerContainer />
            </Card>
        </AppLayout>
    )
}
export async function getServerSideProps({req}) {
    const headers = req ? req.headers : {};
    return { props: { headers } }   
}
export default App