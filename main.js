$(document).ready( function() {

let $text = $('#text') 
let $genBtn = $('#generateBtn')
let $ansBtn = $('#answerBtn')

function getRandomInt(question) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

$genBtn.on('click', function() {
    function random_item(items)
    {    
    return items[Math.floor(Math.random()*items.length)]        
    }  
    let items = ['question', 'question1', 'question2']
    $text.text(random_item(items))
    })
    $ansBtn.on('click', function() {
        if ($text.text == 'question') {
            $text.text('answer')
        } else {
            $text.text('not working')
        }
        
        })
})

$ansBtn.on('click', function() {
if ($text.text === 'question') {
    $text.text('answer')
} else {
    $text.text('not working')
}

})
 
