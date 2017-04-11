function AATo27(AA) {
    return AA
        .split("")
        .reduce(function(pre, cur, index, array) {
            return pre + (parseInt(cur, 36) - 9) * Math.pow(26, array.length - index - 1)  },0)
}

AATo27("A") //1 
AATo27("B") //2
AATo27("AA") //27
AATo27("AB") //28
AATo27("AAA") //703
AATo27("AAB") //704
AATo27("ABA") //729
AATo27("ABB") //730