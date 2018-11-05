using System;

namespace borkode{
    public class Program
    {
	public static void Main(){

            Console.WriteLine("Find the distance and angle from two points");
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
            Console.WriteLine("Points: ({0},{1}), ({2},{3})",x1,x2,y1,y2);
        var d = Math.Sqrt(Math.Pow((x2-x1),2)+Math.Pow((y2-y1),2));
		var a = Math.Atan2((y2-y1),(x2-x1))*(180/Math.PI);
		var r = Math.Atan2((y2-y1),(x2-x1));
		Console.WriteLine("Distance: {0}.. units",Math.Abs(Math.Round(d*1000)/1000));
		Console.WriteLine("Angle: {0}.. deg ({1}.. rad)",Math.Round(a*100)/1000,Math.Round(r*1000)/1000);
    }
		
	}
	}
