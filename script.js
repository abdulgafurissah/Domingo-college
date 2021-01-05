function displayNav(){
    document.getElementsByTagName('header')[0].style.width = '70%'
    document.getElementsByTagName('header')[0].style.height = '100%'
    document.getElementsByTagName('nav')[0].style.height = '0px'
}

function closesidebar(){
    document.getElementsByTagName('header')[0].style.width = '0px'
    document.getElementsByTagName('nav')[0].style.height = '100%'
}