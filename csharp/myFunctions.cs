using System;

namespace borkode{
    public class Program
    {
	public static void Main(){
	Console.WriteLine("Select a program to run:");
	Console.WriteLine("'pythagorean'");
		var lineRead = Console.ReadLine();
		var func = new Functions();
		if(lineRead=="pythagorean")
		{
			func.Pythagorean();
		}
		else
		{
			Console.WriteLine("Not a program!");
		}
	}
	public class Functions{
        public void Pythagorean()
        {
            Console.WriteLine("Simple Pythagorean Theroem calculator in C#");
            Console.WriteLine();
            Console.WriteLine("a =");
            var a = Console.ReadLine();
            Console.WriteLine("b =");
            var b = Console.ReadLine();
           var ad = Convert.ToDouble(a);
           var bd = Convert.ToDouble(b);
            Console.WriteLine("{0}² + {1}² = {2}²",ad,bd,ad+bd);
            Console.WriteLine("Final answer for 'c' is {0}.",Math.Sqrt(Math.Pow(ad,2)+Math.Pow(bd,2)));
        
    }
		
	}
	}
}
