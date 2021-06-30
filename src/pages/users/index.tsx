import React from 'react';
import { Card } from 'antd'
import UserContainer from 'src/containers/users'
import dynamic from 'next/dynamic';
const AppLayout = dynamic(() => import('src/components/layout'), { ssr: true });
export default function App(props) {
    return (
        <AppLayout title={"Quản trị viên"} activeMenuKey="/users">
            <Card>
                <UserContainer />
            </Card>
        </AppLayout>
    )
}
export async function getServerSideProps({req}) {
    const headers = req ? req.headers : {};
    return { props: { headers } }   
}
