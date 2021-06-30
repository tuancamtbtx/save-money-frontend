import React from 'react'
import { ContentWrapper, HeaderWrapper } from 'src/components/wrapper'
import { Card } from 'antd'
import SaleReport from './sale-report'
import SavingReport from './saving-report'
const ReportContainer: React.FC =() => {
  return (
    <ContentWrapper>
      <HeaderWrapper>
        <h1>Báo cáo</h1>
      </HeaderWrapper>
      <Card title="Báo Cáo Doanh Số Hoạt Động Ngày">
          <SaleReport/>
      </Card>
      <Card title="Báo Cáo Mở/Đóng Sổ Tháng">
          <SavingReport/>
      </Card>

    </ContentWrapper>
  )
}
export default ReportContainer