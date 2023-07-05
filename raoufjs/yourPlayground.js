// let Vname , const Vname , var Vname, Vname;
    let food = "banana";
    let prix = 20;
    const persent = 0.2;
    //Programmers do not support it
        var stringHello = 'Hello, World!';
        age = 18;
// type of value: number ,string ,boolean, object, Bigint, Undefined, Null, Symbol;
    
    // Numbers:
        let length = 16;
        let weight = 7.5;
    // Strings:
        let color = "Yellow";
        let lastName = "Johnson";
    // Booleans
        let x = true;
        let y = false;
    // Object:
        const person = {firstName:"John", lastName:"Doe"};
    // bigint
        let xb = BigInt("123456789012345678901234567890");
/* operators:
    -Arithmetic Operator: ' + ',' * ',' - ',' / ',' % ',' ** ',' ++ ',' -- ';
    -Assignment Operator: ' = ',' += ',' -= ',' *= ',' /= ',' %= ',' **= '
    -Comparison Operator: ' == ',' === ',' != ',' !== ',' < ',' > ',' <= ',' >= ',' ? ', -Comp string
    -String Operator: ' + ',' += '; 
    -Logical Operator: ' && ',' || ',' ! ';
    -Bitwise Operator:
            | Operator |  Description	            |   Example	    |        Same as	  |    Result    |    Decimal    |
            |    &	   |     AND	                |    5 & 1	    |      0101 & 0001	  |     0001	 |       1       |
            |    |	   |      OR	                |    5 | 1	    |      0101 | 0001	  |     0101	 |       5       |
            |    ~	   |     NOT	                |      ~5	    |         ~0101	      |     1010	 |       10      |
            |    ^	   |     XOR	                |    5 ^ 1	    |      0101 ^ 0001	  |     0100	 |       4       |
            |    <<	   |  left shift                |    5 << 1	    |      0101 << 1	  |     1010	 |       10      |
            |    >>	   |  right shift	            |    5 >> 1	    |      0101 >> 1	  |     0010	 |       2       |
            |    >>>   |  unsigned right shift	    |    5 >>> 1    |      0101 >>> 1	  |     0010	 |       2       |
*/
        a = 20;
        b *= 21;
        c = a % b;
        d = (c ** a) %= b;
        if(d >= (a ** b) || a !== b - c){
            a = b = "No!!";
        }
// string: "",'',``;
        // "" or '' for add values add ' + ';
        // `` for add values add ${valiues};