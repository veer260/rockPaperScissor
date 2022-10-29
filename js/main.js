let images = document.querySelectorAll(".choice");
let userWin = 0;
let compWin = 0;
let user = document.getElementById("userScoreVal");
let comp = document.getElementById("compScoreVal");
let userChoice = document.getElementById("result-user-stat");
let compChoice = document.getElementById("result-comp-stat");
let winnerChoice = document.getElementById("result-final-stat");
let resetBtn = document.getElementsByClassName("reset-btn");
// console.log(resetBtn);
// console.log(images);
for(let i = 0; i < images.length; i++)
{
    images[i].addEventListener("click", function(){
        computerChoice();
        function computerChoice(){
            let idx = Math.floor(Math.random()*3);
            let max = Math.max(i, idx);
            let userImage = images[i].innerHTML;
            let compImage = images[idx].innerHTML;
            userChoice.innerHTML = `User: <span>${userImage}</span>`;
            compChoice.innerHTML = `Comp: <span>${compImage}</span>`;
            console.log(userImage);
            if(i == idx + 1){
                userWin++;
                winnerChoice.innerHTML = `Winner: User`;
            }
            else if ( i === 0 && idx === 2){
                userWin++;
                winnerChoice.innerHTML = `Winner: User`;
            }else if( idx === i + 1){
                compWin++;
                winnerChoice.innerHTML = `Winner: Computer`;
            }else if( idx === 0 && i === 2){
                compWin++;
                winnerChoice.innerHTML = `Winner: Computer`;
            }else if(i === idx){
                winnerChoice.innerHTML = `Winner: Draw`;
            }
            user.textContent =  `${userWin}`;
            comp.textContent =  `${compWin}`;
        }
    })
}

resetBtn[0].addEventListener("click", function(){
    user.textContent = "0";
    comp.textContent = "0";
    userChoice.textContent = "User: ";
    compChoice.textContent = "Computer: ";
    winnerChoice.textContent = "Winner: "
});