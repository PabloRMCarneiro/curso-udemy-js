function recursiva(max){
    if(max > 0){
        console.log(max);
        recursiva(max - 1);
    }
}
recursiva(10)