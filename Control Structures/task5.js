let score = prompt("Enter your score");
score = Number(score);
    switch (true) {
        case (score >= 90):
            console.log("grade = A");
            break;
          case (score >= 70):
            console.log("grade = B");
            break;
          case (score >= 60):
            console.log("grade = C");
            break;
          case (score >= 40):
            console.log("grade = D");
            break;
          case (score >= 30):
            console.log("grade = E");
            break;
          default:
            console.log("grade = F");
    }
  
  