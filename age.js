var floatAge, floatDays, intWeeks,  floatMonths;
     floatAge = parseFloat(prompt("Enter age in years"));
     floatDays = parseFloat(floatAge*365.25);
     floatMonths = parseFloat(floatAge*12);
     intWeeks = parseInt(floatDays/7);
     intFortnights = parseInt(floatDays/14);
     
     
     alert("Age in..." +
           "\nMonths = " + floatMonths +
           "\nFortnights = " + intFortnights +
           "\nWeeks = " + intWeeks +
           "\nDays = " + floatDays);

    
     