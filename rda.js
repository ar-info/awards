
s_subdivision_exp = /^([A-Z][A-Z]-[\d][\d])\s+(.+)/;

var ForReading = 1, ForWriting = 2;


WScript.Echo("RDA File Converter Version 1.0 Copyright (C) 2015 Alexey Raevsky RG3AR");

objArgs = WScript.Arguments;

if (objArgs.length != 2){
   WScript.Echo("USE: cscript rda.js <rda_text_file> <output_file>");
   WScript.Quit(0);
}

WScript.Echo("");

fs = new ActiveXObject("Scripting.FileSystemObject");

var f_orig = fs.OpenTextFile(objArgs(0), ForReading);
var f_out = fs.CreateTextFile(objArgs(1), true);

var s_out;

var num_str = 0;
var num_deleted = 0;
var num_rda = 0;

while(!f_orig.AtEndOfStream){
	
	s = f_orig.ReadLine();
	num_str++;
	
	if (s_subdivision_exp.test(s)){
		
		if (RegExp.$2.toLowerCase() != "deleted"){
		
			s_out = "\""+RegExp.$1+"\",\""+RegExp.$1+"\",\""+RegExp.$2+"\",\"0\"";		
			f_out.WriteLine(s_out);
			num_rda++;
		} else {
			num_deleted++;
		}
	}
		
	
}

WScript.Echo("Done!\n");
WScript.Echo("Total number of strings in input file: "+num_str);
WScript.Echo("Number of districts: "+num_rda);
WScript.Echo("Deleted districts excluded from list: "+num_deleted);


f_orig.Close();
f_out.Close();

