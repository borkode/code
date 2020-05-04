using System;

namespace borkode{
    public class Program
    {
	public static void Main(){

            Console.WriteLine("Find multiple values from two points");
            Console.WriteLine();
            Console.WriteLine("x1:");
            var x = Console.ReadLine();
            Console.WriteLine("x2:");
            var xx = Console.ReadLine();
           var x1 = Convert.ToDouble(x);
           var x2 = Convert.ToDouble(xx);
           Console.WriteLine();
            Console.WriteLine("y1:");
            var y = Console.ReadLine();
            Console.WriteLine("y2:");
            var yy = Console.ReadLine();
           var y1 = Convert.ToDouble(y);
           var y2 = Convert.ToDouble(yy);
			Console.WriteLine("");
            Console.WriteLine("");
            Console.WriteLine("Points: ({0},{1}), ({2},{3})",x1,x2,y1,y2);
            Console.WriteLine("");
        var rise = y2-y1;var run = x2-x1;
        var d = Math.Sqrt(Math.Pow(run,2)+Math.Pow(rise,2));
		var a = Math.Atan2(rise,run)*(180/Math.PI);
		var r = Math.Atan2(rise,run);
        var s = rise/run;
		Console.WriteLine("Distance:   ~{0} units",Math.Abs(Math.Round(d*1000)/1000));
		Console.WriteLine("Angle:      ~{0} deg (~{1} rad)",Math.Round(a*1000)/1000,Math.Round(r*1000)/1000);
        Console.WriteLine("Slope:      ~{0} units",Math.Round(s*1000)/1000);
        Console.WriteLine("http://github.com/borkode");
    }
		
	}
	}
