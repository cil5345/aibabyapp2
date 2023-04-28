const submit = document.querySelector("form");
const button = document.querySelector('button')


//SUBMIT BUTTON
submit.addEventListener("submit", async (e) => {
  
  e.preventDefault();
  showSpinner()
  const data = new FormData(submit);
  let string = [...data.values()].toString()
  console.log(string)
  
  const response = await fetch("http://localhost:8080/dream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: `provide a detailed recommendation if ${string }is safe during pregnancy or breastfeeding. Please provide rationale. If it is not safe, please provide alternate recommendations.`,
    }),
  });

  const answer  = await response.json()
  console.log(answer.data)
  const result = document.querySelector('.output').textContent = answer.data
  hideSpinner()
  
});


//SPINNER FUNCTION 
const showSpinner = () => {
  button.disabled = true
  button.innerHTML = `<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>`
  console.log('spinner function')
}

const hideSpinner = () => {
  button.disabled = false
  button.innerHTML = `Submit`
}
