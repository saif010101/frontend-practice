// bg-indigo-800 : active
// bg-indigo-600 : inactive

// fetch all list items of mainlist
const listItems = document.querySelectorAll("#main-list li");
const btn = document.getElementById("click-me");
const sidebar = document.getElementById("main-list");

btn.addEventListener("click", () => {
    console.log(sidebar);
    sidebar.classList.toggle("hidden");
});

listItems.forEach(function(item){
    item.addEventListener("click",function (e){
        currentElement = e.currentTarget;
        
        // make all other items inactive
        listItems.forEach((item) => {
            if (item.classList.contains("bg-indigo-800"))
                item.classList.toggle("bg-indigo-800");
        });

        currentElement.classList.toggle("bg-indigo-800");
    })
});


