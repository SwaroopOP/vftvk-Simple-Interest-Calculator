function compute()
{   
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest= principal * years * rate / 100;
    years_in_future= newDate().getFullYear() + parseInt(years);
if(principal<=0)

{

   alert("enter a positive number greater than zero");

   document.getElementById("prinicipal").focus();
   document.getElementById("prinicipal").click();
}
else{
    result.innerHTML = "If you deposit"+"<mark>"+"principal"+"</mark>"+"," +"</br>"+"at an interest rate of"+"<mark>"+"rate"+"%"+"</mark>"+"."+"</br>"+"You will receive an amount of"+"<mark>"+"years"+"</mark>"+","+"</br>"+"in the year"+"<mark>"+"years_in_future"+"</mark>"
}
   return null;
}
function updateSlider(sliderAmount)
{
    var sliderSpan= document.getElementById("sliderAmount")
    sliderSpan.innerHTML =sliderAmount +"%";
}