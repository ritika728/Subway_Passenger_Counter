// to manipulate rendering text
let count_el = document.getElementById("count_id")
// console.log(count_el)

let save_el = document.getElementById("prev_id")
// console.log(save_el)


// to perform calculations
let count = 0

function increment() {
    count += 1
    console.log(count)
    count_el.innerText = count
}

function save() {
    
    // to concatenate previous results with the text preceding enteries
    // declaring it here becuase it needs to get modified every time.
    let count_str = count + " - "

    // to render 
    // save_el.innerText += count_str
    save_el.textContent += count_str

    // to set the counter to 0 again
    count = 0

    // to set the rendered text to 0 on clicking save
    count_el.innerText = 0 
}