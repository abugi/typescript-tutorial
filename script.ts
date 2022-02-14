/*
    1. Typescript is a langauge built on javascript to give it 
    static typed capabilities. It also has other features which
    are not present in Javascript.

    2. You can write pure javscript code in typescript and it
    will run without any issues. But the file carrying your 
    typescript code must end with ".ts" extension

    3. Since the browser does not support typescript natively, all
    typescript code must be be compiled down to javascript in order
    to run in the browser.

    4. Download and install the typescript compiler from npm using the command
    "npm install -g typescript" (Note: you must have Node.js installed)

    5. In your terminal, run tsc script.ts (assuming your filename is script.ts).
    This will compile your typescript code and inject it into a file called
    "script.js" in the same directory as the script.ts file

    6. Finally, link your HTML file to the script.js file. You are all set!
*/

const _name = 'Neemat'

console.log(_name)