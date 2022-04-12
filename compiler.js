const fs = require('fs')
const path = require('path')
let index = fs.readFileSync(path.join(__dirname, 'index.luci'), 'utf8').replaceAll("do[[[[[[[[[[", "{").replaceAll("]]]]]]]]]]", "}").replaceAll("&", "'").replaceAll("@@@[", "(").replaceAll("]@@@", ")").replace("$$$", "} \nhandler()")
let trues = true
let arr = index.split(/\r?\n/);

arr.forEach((line, idx)=> {
    if (idx == 0) {
        if (!line.includes('handler((({{{ project; begins- luciLang inter** }}})))')) {
            return console.log('Error: The first line of the file must be "handler((({{{ project; begins- luciLang inter** }}})))". and end with "$$$')
        }

        let newLn = "function handler() {"
        arr[idx] = newLn


    }

    

    if(line.includes("this.system.internal.builtIn.terminal.printNewLine")){
        let newLn;

        newLn = line.replace("this.system.internal.builtIn.terminal.printNewLine", "console.log").replace("@@@[", "(").replace("@@@]", ")").replaceAll("&", "'")
        arr[idx] = newLn
    }

    if(line.includes("make=?function=?with=?the??name//=>")){
        let newLn;
        newLn = line.replace("make=?function=?with=?the??name//=>", "function")
        arr[idx] = newLn
    }

    if(line.includes("run%function =>> ")){
        let newLn;
        if(!line.includes('4 twenty {{{')) {
             console.error("PLEASE ADD THE 4 TWENTY {{{ TO YOUR CODE.")
            process.exit()
        }
        newLn = line.replace("run%function =>> ", "").replace("4 twenty {{{", "")
        arr[idx] = newLn
    }

    if(line.includes("make new variable_nonConstant named")){
        let newLn;

        newLn = line.replace("make new variable_nonConstant named", "let ").replace("equal to", " = ").replaceAll("&", "'")
        arr[idx] = newLn
    }

    if(line.includes("make=?function=?with=?the??name// =>")){
        let newLn;

        newLn = line.replace(" make=?function=?with=?the??name// =>", "function ")
        arr[idx] = newLn
    }



    if (line.includes("if?statement?held")) {
        let newLn;

        newLn = line.replace("if?statement?held", "if")
        arr[idx] = newLn
    }

});

eval(arr.join("\n"))