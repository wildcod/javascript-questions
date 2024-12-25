/* 
Your are given a 2-D array of characters. There is a hidden message in it.

I B C A L K A
D R F C A E A
G H O E L A D 

The way to collect the message is as follows
1. start at top left
2. move diagonally down right
3. when cannot move any more, try to switch to diagonally up right
4. when cannot move any more, try switch to diagonally down right, repeat 3
5. stop when cannot neither move down right or up right. the character on the path is the message

for the input above, IROCLED should be returned.
if no characters could be collected, return empty string
*/

function decode(message) {
    // your code here
    let output = "";
    if(!message || !message.length) return output;

    const rowSize = message.length - 1;
    const colSize = message[0].length - 1;

    let row=0, col=0;

    while(col <= colSize){      
      // top to down
      while(row < rowSize && col <= colSize){
        output += message[row][col];
        row++;
        col++;
      }

      // bottom to up
      while(row >= 0 && col <= colSize){
        output += message[row][col];
        row--;
        col++;
      }
      row = 1;
    }

    return output;
  }

  const input = [
    ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
    ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
    ['G', 'H', 'O', 'E', 'L', 'A', 'D'] 
  ]

  console.log(decode(input));