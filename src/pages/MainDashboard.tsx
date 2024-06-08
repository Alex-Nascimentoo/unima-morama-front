
import { BarGraph } from '../components/BarGraph'
import { CalendarContainer } from '../components/CalendarContainer'
import { DonutGraph } from '../components/DonutGraph'
import { InfoCardLabelStyle } from '../styles/components/Info/InfoCardLabel'
import { InfoCardTextStyle } from '../styles/components/Info/InfoCardTextStyle'
import { InfoCardWrapperStyle } from '../styles/components/Info/InfoCardWrapperStyle'
import { HomeContainer, RightDashboardPannel, InfoCardSection } from '../styles/pages/home'

const mockedMonthsValue = {
  jan: 12 ,
  feb: 10 ,
  mar: 8 ,
  apr: 9 ,
  may: 9 ,
  jun: 6 ,
  jul: 10 ,
  aug: 11 ,
  sep: 12 ,
  oct: 6 ,
  nov: 5 ,
  dec: 13
}

const mockedPieGraphValue = {
  firstAttributeNumber: 1, 
  firstAttributeName: 'Gasto 1',
  secondAttributeNumber: 2, 
  secondAttributeName: 'Gasto 2', 
  thirdAttributeNumber: 3, 
  thirdAttributeName: 'Gasto 3' 
}

function MainDashboard() {
  return (
    <HomeContainer>
      <CalendarContainer />

      <RightDashboardPannel>
        <InfoCardSection>

          <InfoCardWrapperStyle>
            <InfoCardLabelStyle $value={150.00}>{150.00}</InfoCardLabelStyle>
            <InfoCardTextStyle>Saldo Mensal</InfoCardTextStyle>
          </InfoCardWrapperStyle>

          <InfoCardWrapperStyle>
            <InfoCardLabelStyle $value={-250.50}>{-250.50}</InfoCardLabelStyle>
            <InfoCardTextStyle>Lucro Mensal</InfoCardTextStyle>
          </InfoCardWrapperStyle>

          <InfoCardWrapperStyle>
            <InfoCardLabelStyle $value={-250.50}>{-250.50}</InfoCardLabelStyle>
            <InfoCardTextStyle>Lucro Total</InfoCardTextStyle>
          </InfoCardWrapperStyle>

        </InfoCardSection>

        <DonutGraph {...mockedPieGraphValue} />
        <BarGraph {...mockedMonthsValue} />
      </RightDashboardPannel>
    </HomeContainer>
  )
}

export default MainDashboard