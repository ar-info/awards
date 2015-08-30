# awards

##RDA award list converter for AALog 3.2

Tested with AALog 3.2.0.1168

How to use:

1. Save *rda.js* script to local drive, e.g. to *C:\RDA*.
2. Save official RDA districts list from http://rdaward.org/rda_eng.txt to the file *rda_orig.txt* in the same *C:\RDA* directory.
3. Open command line console (cmd), change current directory to *C:\RDA*.
4. Run script from command line: `C:\RDA> cscript rda.js rda_orig.txt rda_out.ref`

Now all district data is in *rda_out.ref* file. 

You can load this file to AALog:

1. Open AALog and invoke **Config->Awards list** from main menu.
2. Select **Russian Districts Award** and press **Edit**.
3. Press button with edit icon and **Edit references list** tooltip.
4. Press **Export** button and save the original list so you will have the backup.
5. Press **Clear list** button and clear all references.
6. Press **Import** button, select your *rda_out.ref* file and press **Open**.

Now you have new RDA districts list in your AALog. Do not forget to update awards statistic by using **Tools->Update awards statistic** command from the main menu.

If you have any questions or comments, you can email me: ar_info at inbox dot ru.

73!
RG3AR
 
 