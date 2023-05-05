import throttle from "lodash.throttle"
const form = document.querySelector(".feedback-form")
form.addEventListener("input", throttle((e)=>{
    const data = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }
    const stringifyData = JSON.stringify(data)
localStorage.setItem("feedback-form-state",stringifyData)
    
}), 500)
const localData = localStorage.getItem("feedback-form-state")
const parseLocalData = JSON.parse(localData)
if(parseLocalData){
form.elements.email.value = parseLocalData.email
form.elements.message.value = parseLocalData.message
}
form.addEventListener("submit", (e)=>{
e.preventDefault()
console.log({
    email: form.elements.email.value,
    message: form.elements.message.value
});
form.reset()
localStorage.removeItem("feedback-form-state")

})
