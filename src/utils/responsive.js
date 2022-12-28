function windowSize(x)
{
    let size = ""
    if (x <= 600){
        size = "mobile"
    }
    else if (x >600 && x <= 1400)
    {
        size = "tab"
    }
    else{
        size = "pc"
    }
    console.log(size)
    return size
}

export {windowSize}