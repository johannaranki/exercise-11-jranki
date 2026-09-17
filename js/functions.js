/* Funktiot ja muu Javascript */

document.getElementById("showAnswers").addEventListener("click", clickButton)

function clickButton() {
  const answers = document.querySelectorAll(".hide")

  for (const answer of answers) {
    answer.classList.remove("hide")
    answer.classList.add("show")
  }
}