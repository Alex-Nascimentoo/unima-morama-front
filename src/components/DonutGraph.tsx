import { theme } from "../styles/Theme";
import { donutGraphProps } from "../types/donutGraphProps";
import { ComponentContainer, PieGraph, ScoopDiv, DonutGraphWrapper, DonutLabel, DonutColorIndicator, DonutLabelWrapper, DonutLabelsContainer} from "../styles/components/DonutGraph"
 
export function DonutGraph(props: donutGraphProps) {
    const numbersSum = (props.firstAttributeNumber + props.secondAttributeNumber + props.thirdAttributeNumber)
    const firstPercentage = (props.firstAttributeNumber / numbersSum) * 100
    const secondPercentage = (props.secondAttributeNumber / numbersSum) * 100
    const thirdPercentage = (props.thirdAttributeNumber / numbersSum) * 100


    return (
        <ComponentContainer>
            <DonutLabelsContainer>
                <DonutLabelWrapper>
                    <DonutLabel>{props.firstAttributeName}</DonutLabel>
                    <DonutColorIndicator color={theme.color.primary}/>
                </DonutLabelWrapper>

                <DonutLabelWrapper>
                    <DonutLabel>{props.secondAttributeName}</DonutLabel>
                    <DonutColorIndicator color={theme.color.accent}/>
                </DonutLabelWrapper>

                <DonutLabelWrapper>
                    <DonutLabel>{props.thirdAttributeName}</DonutLabel>
                    <DonutColorIndicator color={theme.color.gray}/>
                </DonutLabelWrapper>
            </DonutLabelsContainer>
            
            <DonutGraphWrapper>
                <PieGraph $firstatb = {firstPercentage} $secondatb = {secondPercentage} $thirdatb={thirdPercentage}/>
                <ScoopDiv />
            </DonutGraphWrapper>
        </ ComponentContainer>
    )
}