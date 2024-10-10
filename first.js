let n = 8;

for (let i = 0; i < n; i++) {
    for(let j = 0; j < n - i - 1; j++){
        console.log(" ");
    }
        for(let j = 0; j  <= i; j++){
            console.log("#");
        }
        console.log();
    }