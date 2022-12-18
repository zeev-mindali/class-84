<?php

    //Mathematics Operators:

    $a = 100;
    $b = 200;

    echo $a+$b.PHP_EOL; //300
    echo $a-$b.PHP_EOL; //-100
    echo $a*$b.PHP_EOL; //20,000
    echo $a/$b.PHP_EOL; //0.5
    echo $a%$b.PHP_EOL; //100



    //shorted operators;
    $x = 10;
    // $x +=8;
    // $x -=8;
    // $x *=8;
    // $x /=8;
    // $x %=8;

    $y=$x++; //y=x+1  =>y=11,x=10
    $y=$x--;

    $y=++$x; //y=x+1; y=11 , x=11
    $y=--$x;

    //a=100,b=200

    echo ($a>$b).PHP_EOL; //""
    echo ($a<$b).PHP_EOL; //1
    echo ($a>=$b).PHP_EOL; //""
    echo ($a<=$b).PHP_EOL; //1
    echo ($a==$b).PHP_EOL; //""
    echo ($a!=$b).PHP_EOL; //1
    echo ($a===$b).PHP_EOL; //""
    echo ($a!==$b).PHP_EOL; //1

    //logic operators
    echo ($a<$b and $a == 100).PHP_EOL; 
    echo ($a<$b && $a == 100).PHP_EOL;
    echo ($a<$b or $a == 100).PHP_EOL;
    echo ($a<$b || $a == 100).PHP_EOL;

    echo !($a>$b).PHP_EOL; //1
?>