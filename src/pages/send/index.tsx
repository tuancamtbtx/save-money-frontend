import React from 'react';
import { Card } from 'antd'
import SendContainer from 'src/containers/send'
import dynamic from 'next/dynamic';
const AppLayout = dynamic(() => import('src/components/layout'), { ssr: false });

function App() {
    return (
        <AppLayout title={"Gửi tiền"} activeMenuKey="/send">
            <Card>
                <SendContainer />
            </Card>
        </AppLayout>
    )
}
// export async function getServerSideProps({ req }) {
//     const headers = req ? req.headers : {};
//     return { props: { headers } }
// }

export default (App)
