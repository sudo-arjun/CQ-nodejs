let question;
fetch(`http://127.0.0.1:3000/getquestion?n=1`)
    .then((response) => {
        // return JSON.parse(response);
        console.log(response);
        question = response;
        return response.json();
    })
    .then((data) => {
        question = data;
        console.log(question)
    })
    .catch((err) => {
        console.log("myerror: ", err);
    })

    document.querySelector('#ques').innerHTML = question.question;