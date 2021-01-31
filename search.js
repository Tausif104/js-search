const searchInput = document.getElementById('searchInput')

const searchList = () => {
    const searchValue = searchInput.value.toUpperCase()

    const ul = document.getElementById('names')
    const li = ul.querySelectorAll('.list-item')

    for (let i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(searchValue) > -1) {
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none'
        }
    }
}

searchInput.addEventListener('keyup', searchList)
