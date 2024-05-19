import { theme } from "../styles/Theme";
import { useMemo, useState } from "react";
import { CalendarContainerSectionStyle } from "../styles/components/Calendar/CalendarContainerSectionStyle";
import { CalendarHeaderStyle } from "../styles/components/Calendar/CalendarHeaderStyle";
import { CalendarTitleLabelStyle } from "../styles/components/Calendar/CalendarTitleLabelStyle";
import { SelectWrapperStyle } from "../styles/components/Calendar/Select/SelectWrapperStyle";
import { SelectButtonStyle } from "../styles/components/Calendar/Select/SelectButtonStyle";
import { SelectIconStyle } from "../styles/components/Calendar/Select/SelectIconStyle";
import { WeekdayHeaderStyle } from "../styles/components/Calendar/WeekDay/WeekDayHeaderStyle";
import { CalendarDayWrapperStyle } from "../styles/components/Calendar/Summary/CalendarDayWrapperStyle";
import { WeekDayElementStyle } from "../styles/components/Calendar/WeekDay/WeekDayElementStyle";
import { CalendarDayButtonStyle } from "../styles/components/Calendar/Summary/CalendarDayButtonStyle";
import { CalendarDayLabelStyle } from "../styles/components/Calendar/Summary/CalendarDayLabelStyle";
import { BalanceLabelStyle } from "../styles/components/Calendar/Summary/BalanceLabelStyle";
import { BalanceParagraphStyle } from "../styles/components/Calendar/Summary/CalenadarBalanceLabelStyle";
import { DummySummaryStyle } from "../styles/components/Calendar/Summary/DummySummaryStyle";

export function CalendarContainer() {
    const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]    
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    const [ currentMonth, setCurrentMonth ] = useState(new Date().getMonth() + 1)
    const [ currentYear, setCurrentYear ] = useState(new Date().getFullYear())

    const daysInMonth = useMemo(() => new Date(currentYear, currentMonth, 0).getDate(), [currentMonth, currentYear])
    const startingWeekDay = useMemo(() => new Date(currentYear, currentMonth - 1, 1).getDay(), [currentMonth, currentYear])

    return (
        
        <CalendarContainerSectionStyle>

            <CalendarHeaderStyle> 
                
                <CalendarTitleLabelStyle>Resumo Diário</CalendarTitleLabelStyle>

                <SelectWrapperStyle>
                    
                    <SelectButtonStyle onClick={() => currentMonth > 1 ? setCurrentMonth(prev => prev - 1) : setCurrentYear(prev => prev - 1) }>
                        <SelectIconStyle $src="/icon-arrow.svg" $color={theme.color.primary} $direction="left" $size="1rem"></SelectIconStyle>
                    </SelectButtonStyle>
                    
                    <SelectWrapperStyle>{monthNames[currentMonth - 1].substring(0,3)}</SelectWrapperStyle>
                    
                    <SelectButtonStyle onClick={() => currentMonth < 12? setCurrentMonth(prev => prev + 1) : setCurrentYear(prev => prev + 1) }>
                        <SelectIconStyle $src="/icon-arrow.svg" $color={theme.color.primary} $direction="right" $size="1rem"></SelectIconStyle>
                    </SelectButtonStyle>

                    <SelectButtonStyle onClick={() => setCurrentYear(prev => prev - 1)}>
                        <SelectIconStyle $src="/icon-arrow.svg" $color={theme.color.primary} $direction="left" $size="1rem"></SelectIconStyle>
                    </SelectButtonStyle>
                    
                    <SelectWrapperStyle>{currentYear}</SelectWrapperStyle>
                    
                    <SelectButtonStyle onClick={() => setCurrentYear(prev => prev + 1)}>
                        <SelectIconStyle $src="/icon-arrow.svg" $color={theme.color.primary} $direction="right" $size="1rem"></SelectIconStyle>
                    </SelectButtonStyle>
                
                </SelectWrapperStyle>
            </CalendarHeaderStyle>
            
            <WeekdayHeaderStyle>
                {weekDays.map(day => <WeekDayElementStyle key={day}>{day.substring(0, 3)}</WeekDayElementStyle>)}
            </WeekdayHeaderStyle>
            
            <CalendarDayWrapperStyle>
                {Array(startingWeekDay + daysInMonth).fill(null).map((_ ,dayIndex) => {
                    if (dayIndex >= startingWeekDay) {
                        return (
                            <CalendarDayButtonStyle key={dayIndex - startingWeekDay + 1} onClick={() => {console.log(`${String(dayIndex - startingWeekDay + 1).padStart(2, "0")}${String(currentMonth).padStart(2, "0")}${currentYear}`)}}>
                                <CalendarDayLabelStyle>{String(dayIndex - startingWeekDay + 1).padStart(2, "0")}</CalendarDayLabelStyle>
                                <BalanceParagraphStyle>Saldo:</BalanceParagraphStyle>
                                <BalanceLabelStyle $totaldailybalance={9999.99}>{990.00} R$</BalanceLabelStyle>
                            </CalendarDayButtonStyle>
                            )
                    } else {
                        return <DummySummaryStyle key={dayIndex - startingWeekDay + 1}></DummySummaryStyle>
                    }
                })}
            </CalendarDayWrapperStyle>

            
        </CalendarContainerSectionStyle>
        )
}
