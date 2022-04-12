
# LuciLang

The Luci programming language, compiles directly to javascript and provides excellent syntax.

## Installation

To install this project, clone this repository.

```bash
//Code goes into index.luci
//Once done type;
node compiler.js
```


## Usage/Examples

Your code **must** always start with the handler, and end with three $ signs ($$$)
```javascript
handler((({{{ project; begins- luciLang inter** }}})))

$$$
```

Logging things/Hello World
```javascript
this.system.internal.builtIn.terminal.printNewLine@@@[&hello World&]@@@
```

Crating variables
```javascript
make new variable_nonConstant named variableName equal to &value&
```

If statements
```javascript
if?statement?held@@@[ statement ]@@@ do[[[[[[[[[[
    //output
]]]]]]]]]] //replace output and statement with their respective counterparts.
```

Creating and running functions;
```javascript
//CREATE FUNCTION ↓↓↓                FUNCTION NAME↓↓↓    PARANTHYSIS ↓↓↓
make=?function=?with=?the??name//=> functionName@@@[]@@@ do[[[[[[[[[[
//END PARANTHYSIS
          ]]]]]]]]]]


//RUN FUNCTION ↓↓↓
run%function =>> functionName @@@[]@@@ 4 twenty {{{ 
```

## Used By

This project is used by the following companies:

- No one
- Who tf would use this


## Support

For support, cry yourself to sleep.


## Tech Stack

**Client:** Nodejs

**Server:** Nodejs

