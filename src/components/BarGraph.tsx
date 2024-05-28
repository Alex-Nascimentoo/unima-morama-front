import { monthProfitProps } from "../types/monthProfitProps";
import { RulerDiv, RulerDivParagraph, MonthDiv, MonthItemDiv, MonthItemDivBars, MonthDivParagraph, BarGraphContainer, BarDiv, BarDivMedian, MonthKeyParagraph } from '../styles/components/BarGraph'
 
export function BarGraph(props: monthProfitProps) {
    const arrayValueMonths = Object.values(props);
    const arrayKeys = Object.keys(props);
    const valueMostProfitableMonth = Math.max(...arrayValueMonths);
    const yearlyProfit = arrayValueMonths.reduce((prev, state) => prev + state, 0);
    const medianMonthlyProfit = yearlyProfit / arrayValueMonths.length;

    return (
        <BarGraphContainer>
            <RulerDiv>
                <RulerDivParagraph>{valueMostProfitableMonth}</RulerDivParagraph>
                <RulerDivParagraph>{valueMostProfitableMonth / 2}</RulerDivParagraph>
                <RulerDivParagraph>0</RulerDivParagraph>
            </RulerDiv>        
            <MonthDiv> 
                {arrayKeys.map(key => (
                    <MonthItemDiv key={key}>
                        <MonthItemDivBars>
                            <BarDiv height={props[key] / valueMostProfitableMonth * 100}/>
                            <BarDivMedian height={medianMonthlyProfit / valueMostProfitableMonth * 100} />
                        </MonthItemDivBars>
                        <MonthDivParagraph>{props[key]}</MonthDivParagraph>
                        <MonthKeyParagraph>{key.toUpperCase()}</MonthKeyParagraph>
                    </MonthItemDiv>
                ))}
            </MonthDiv>        
        </BarGraphContainer>
        )
}