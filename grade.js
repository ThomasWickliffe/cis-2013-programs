
var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter final Midterm pts"));

floatFinPts = parseFloat(prompt("Please enter points earned on the Final"));

floatTotalPts = parseFloat(floatHwPts+floatMidPts+floatFinPts); 

intGradeOption = parseInt(prompt('Please enter a 1 of you wish to use the "pass/fail" option'));

if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
        stringFinalGrade="Pass";
    }
        else
        {
            stringFinalGrade="Fail";
        }
}
            else
            {
                if (floatTotalPts >= 90)
                {
                     stringFinalGrade = "A";
                }
                    else if (floatTotalPts >= 80 && floatTotalPts<90)
                    {
                        stringFinalGrade = "B";
                    }
                        else if (floatTotalPts >= 70 && floatTotalPts<80)
                        {
                            stringFinalGrade = "C";
                        }
                           else if (floatTotalPts >= 60 && floatTotalPts<70)
                            {
                                stringFinalGrade = "D";
                            }
                                else if (floatTotalPts<60) 
                                {
                                    stringFinalGrade = "F";
                                }
            }
                    
                         
                         
alert (stringFinalGrade);
            