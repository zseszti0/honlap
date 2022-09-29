// Inserting the Images
let kill = 0
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText == 'wpan' || image.innerText == 'bpan') {
                image.innerHTML = `${image.innerText} <img class='allimg allfish' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }

            else {

                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}

//Coloring

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(116, 139, 191)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(238, 243, 249)'
        }

    })
}
coloring()

insertImage()

// To red the same team element

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    if (pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(253, 60, 60)'
                    }
                }
            })
        }
    })
}



tog = 1

document.querySelectorAll('.box').forEach(item => {



    item.addEventListener('click', function () {

        // To delete the opposite element

        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        }

        else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText

                    // greenText = item.innerText

                    // pinkColor = ((Array.from(pinkText)).shift()).toString()
                    // greenColor = ((Array.from(greenText)).shift()).toString()


                    // if (pinkColor !== greenColor) {

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    // pinkText=''
                    coloring()
                    insertImage()
                    tog = tog + 1
                    // }
                    // else {
                    //     coloring()
                    //     alert('You cant defeat your own player')
                    // }
                }
            })
        }



        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup



        // Function to display the available paths for all pieces
        
        function whosTurn(toggle) {
            // PAWN

            if (item.innerText == `${toggle}pan`) {

                item.style.backgroundColor = 'pink'



                if (tog % 2 !== 0) {

                // WHITE
                    if (aup < 800 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
    
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                        kill = 0
                        
                    }
                    if (aup < 800 && aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length == 0) {
    
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    if (aup < 800 && aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length == 0) {
    
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    
                    //TAKING SHIT WHITE

                    if (aup < 800 && aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
    
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                        kill = 1
                    }
                    if (aup < 800 && aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
    
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                        kill = 1
                    }

                }
                //BLACK

                if (tog % 2 == 0) {

                    if (aup > 100 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
    
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    if (aup > 100 && aside > 1 && document.getElementById(`b${a - 100 + 1}`).innerText.length == 0) {
    
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    if (aup > 100 && aside < 8 && document.getElementById(`b${a - 100 - 1}`).innerText.length == 0) {
    
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    //TAKING SHIT BLACK

                    if (aup > 100 && aside > 1 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
    
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                        kill = 1
                    }
                    if (aup > 100 && aside < 8 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
    
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                        kill = 1
                    }
                    
                }

            }

            // KING

            if (item.innerText == `${toggle}king`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                }

                //ÁTLÓ
                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                }

                item.style.backgroundColor = 'pink'

            }


            // ROOK
            if (item.innerText == `${toggle}rook`) {
                item.style.backgroundColor = 'pink'

                if (kill == 0) {
                    for (let i = 1; i < 9; i++) {

                        for (let j = 1; j < 9; j++) {
    
                            if (document.getElementById(`b${i * 100 + j}`).innerText == 0) {
                                document.getElementById(`b${i * 100 + j}`).style.backgroundColor = 'green'
                            }
                        }
        
                    }
                } //TAKING SHIT
                else {
                    for (let i = 1; i < 9; i++) {

                        for (let j = 1; j < 9; j++) {
    
                            if (document.getElementById(`b${i * 100 + j}`).innerText == 0) {
                                document.getElementById(`b${i * 100 + j}`).style.backgroundColor = 'green'
                            }
                        }
        
                    }
                    if (aside < 8) {
                        document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
    
                    }
                    if (aside > 1) {
    
                        document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                    }
                    if (aup < 800) {
    
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    }
                    if (aup > 100) {
    
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }
                }

            } 
            // BISHOP

            if (item.innerText == `${toggle}ishop`) {
                item.style.backgroundColor = 'pink'

                if ((a + 200 + 2) < 900 && document.getElementById(`b${a + 200 + 2}`).innerText == 0 && document.getElementById(`b${a + 100 + 1}`).innerText == 0){
                    document.getElementById(`b${a + 200 + 2}`).style.backgroundColor = 'green'
                    kill = 0
                }
                if ((a + 200 - 2) < 900 && document.getElementById(`b${a + 200 - 2}`).innerText.length == 0 && document.getElementById(`b${a + 100 - 1}`).innerText.length == 0) {
                    document.getElementById(`b${a + 200 - 2}`).style.backgroundColor = 'green'
                    kill = 0
                }
                if ((a - 200 + 2) > 100 && document.getElementById(`b${a - 200 + 2}`).innerText.length == 0 && document.getElementById(`b${a - 100 + 1}`).innerText.length == 0) {
                    document.getElementById(`b${a - 200 + 2}`).style.backgroundColor = 'green'
                    kill = 0
                }
                if ((a - 200 - 2) > 100 && document.getElementById(`b${a - 200 - 2}`).innerText.length == 0 && document.getElementById(`b${a - 100 - 1}`).innerText.length == 0) {
                    document.getElementById(`b${a - 200 - 2}`).style.backgroundColor = 'green'
                    kill = 0
                }
                //TAKING SHIT

                if ((a + 200 + 2) < 900 && aside < 8 && document.getElementById(`b${a + 200 + 2}`).innerText.length !== 0 && document.getElementById(`b${a + 100 + 1}`).innerText.length == 0) {
                    document.getElementById(`b${a + 200 + 2}`).style.backgroundColor = 'green'
                    kill = 1
                }

                if ((a + 200 - 2) < 900 && aside > 1 && document.getElementById(`b${a + 200 - 2}`).innerText.length !== 0 && document.getElementById(`b${a + 100 - 1}`).innerText.length == 0) {
                    document.getElementById(`b${a + 200 - 2}`).style.backgroundColor = 'green'
                    kill = 1
                }
                if ((a - 200 + 2) > 100 && aside < 8 && document.getElementById(`b${a - 200 + 2}`).innerText.length !== 0 && document.getElementById(`b${a - 100 + 1}`).innerText.length == 0) {
                    document.getElementById(`b${a - 200 + 2}`).style.backgroundColor = 'green'
                    kill = 1
                }

                if ((a - 200 - 2) > 100 && aside > 1 && document.getElementById(`b${a - 200 - 2}`).innerText.length !== 0 && document.getElementById(`b${a - 100 - 1}`).innerText.length == 0) {
                    document.getElementById(`b${a - 200 - 2}`).style.backgroundColor = 'green'
                    kill = 1
                }
                
            }

            // QUEEN

            if (item.innerText == `${toggle}queen`) {


                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        kill = 1
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        kill = 1
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        kill = 1
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        kill = 1
                        break
                    }
                }



                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        kill = 1
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        kill = 1
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        kill = 1
                        break
                    }

                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        kill = 1
                        break
                    }
                }



                item.style.backgroundColor = 'pink'

            }

            // KNIGHT

            if (item.innerText == `${toggle}knight`) {

                item.style.backgroundColor = 'pink'
                
                //ELŐRE
                if (aup < 800 && document.getElementById(`b${a + 100}`).innerText.length == 0) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    kill = 0
                }
                else {
                    if (aup < 800 && document.getElementById(`b${a + 200}`).innerText.length == 0) {

                        document.getElementById(`b${a + 200}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if (aup < 800 && document.getElementById(`b${a + 200}`).innerText.length !== 0) {

                        document.getElementById(`b${a + 200}`).style.backgroundColor = 'green'
                        kill = 1
                    }

                }
                //HÁTRA
                if (aup > 100 && document.getElementById(`b${a - 100}`).innerText.length == 0) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                }
                else {
                    if (aup > 100 && document.getElementById(`b${a - 200}`).innerText.length == 0) {

                        document.getElementById(`b${a - 200}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if (aup > 100 && document.getElementById(`b${a - 200}`).innerText.length !== 0) {

                        document.getElementById(`b${a - 200}`).style.backgroundColor = 'green'
                        kill = 1
                    }
                }
                //oldalra
                if (aside > 1 && document.getElementById(`b${a - 1}`).innerText.length == 0) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                }
                else {
                    if (aside > 2 && !document.getElementById(`b${a - 2}`).innerText.includes(toggle) && document.getElementById(`b${a - 2}`).innerText.length == 0) {

                        document.getElementById(`b${a - 2}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    else if (aside > 2 && !document.getElementById(`b${a - 2}`).innerText.includes(toggle) && document.getElementById(`b${a - 2}`).innerText.length !== 0) {

                        document.getElementById(`b${a - 2}`).style.backgroundColor = 'green'
                        kill = 1
                    }
                }
                //jobbra
                if (aside < 9 && document.getElementById(`b${a + 1}`).innerText.length == 0) {

                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
                }
                else {
                    if (aside < 8 && !document.getElementById(`b${a + 2}`).innerText.includes(toggle) && document.getElementById(`b${a + 2}`).innerText.length == 0) {

                        document.getElementById(`b${a + 2}`).style.backgroundColor = 'green'
                        kill = 0
                    }
                    if (aside < 8 && !document.getElementById(`b${a + 2}`).innerText.includes(toggle) && document.getElementById(`b${a + 2}`).innerText.length !== 0) {

                        document.getElementById(`b${a + 2}`).style.backgroundColor = 'green'
                        kill = 1
                    }
                }
                
                //ÁTLÓ
                //1 negyed
                if (aup < 800 && aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length == 0) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                }
                
                //2 negyed
                if (aup < 800 && aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length == 0) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                }
                
                //3 negyed
                if (aup > 100 && aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length == 0) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                }

                //4 neyged
                if (aup > 100 && aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length == 0) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                }
                
            }

        }


        // Toggling the turn

        if (tog % 2 !== 0) {
            document.getElementById('togw').style.color = 'white'
            document.getElementById('togb').style.color = 'rgb(75, 75, 75)'
            whosTurn('w')
        }
        if (tog % 2 == 0) {
            document.getElementById('togb').style.color = 'black'
            document.getElementById('togw').style.color = 'rgb(75, 75, 75)'
            whosTurn('b')
        }


        reddish()

        // winning()

        numOfKings = 0


        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'wking' || win.innerText == 'bking') {
                numOfKings += 1
            }

        })

        if (numOfKings == 1) {
            setTimeout(() => {
                // console.log(`${toggle}`) 
                if (tog % 2 == 0) {
                    alert('White Wins !!')
                    location.reload()
                }
                else if (tog % 2 !== 0) {
                    alert('Black Wins !!')
                    location.reload()
                }
            }, 100)
        }



    })

})





// Moving the element
document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'pink') {

            pinkId = hathiTest.id
            pinkText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()

                    }

                })
            })

        }

    })

})






// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})
