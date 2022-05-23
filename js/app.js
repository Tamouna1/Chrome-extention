let myLeads = [];
const inputEl = document.getElementById("input-el"); //can't reesign
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads)
});
for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i];
}
