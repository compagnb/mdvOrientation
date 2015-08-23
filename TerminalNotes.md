Terminal Review Notes

1. pwd = print working directory (where you are on the computer)
    how it is used and sample result:
        compagnb@msdv_orientation:~/workspace $ pwd
        /home/ubuntu/workspace


2. ls = list contents of current directory (whats inside the folder?)
    how it is used and sample result:
        compagnb@msdv_orientation:~/workspace $ ls
        README.md  TerminalNotes  client/  node_modules/  package.json  server.js

3. whoami = what computer/user are you using 
    how it is used and sample result:
        compagnb@msdv_orientation:~/workspace $ whoami
        ubuntu

4. cd directory = change directory (~ = home, .. = back one directory) 
    how is it used and a sample result:
        compagnb@msdv_orientation:~/workspace $ cd client
        compagnb@msdv_orientation:~/workspace/client $ 
        
5. touch = create file
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ touch test.txt

6. cat = whats inside the file
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ cat test.txt
    
7. rm = remove file
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ rm test.txt

8. mkdir = make a directory
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ mkdir tmp
    
9. rmdir = delete a directory
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ rmdir tmp
    
10. mkdir -p = make nested directory
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ mkdir -p food/peanutbutter

11. Command K = clears terminal

12. history = shows history of commands

13. rm -p = remove a string of directories
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ rmdir -p food/peanutbutter

14. tab = auto complete

15. rm -rf = remove directory and all contents
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ rm -rf food/

16. cp = copy file (copy and rename to a different location)
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ cp more-stuff.txt ../some-stuff.txt
    compagnb@msdv_orientation:~/workspace $ cp more-stuff.txt ../
    
17. ls -l = list with permissions
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ ls -l
    total 24
    -rw-r--r-- 1 ubuntu ubuntu  996 Apr 17 15:17 README.md
    -rw-r--r-- 1 ubuntu ubuntu 2313 Aug 22 16:39 TerminalNotes
    drwxr-xr-x 8 ubuntu ubuntu 4096 Apr 17 15:17 client/
    drwxr-xr-x 6 ubuntu ubuntu 4096 Apr 17 15:17 node_modules/
    -rw-r--r-- 1 ubuntu ubuntu  376 Apr 17 15:17 package.json
    -rw-r--r-- 1 ubuntu ubuntu 1931 Apr 17 15:17 server.js
    
18. ls -la = prints invisible files
    how is it used and a sample result:
    compagnb@msdv_orientation:~/workspace $ ls -la
    total 36
    drwxr-xr-x  7 ubuntu ubuntu 4096 Aug 22 16:33 ./
    drwxr-xr-x 20 ubuntu ubuntu 4096 Aug 22 15:57 ../
    drwxr-xr-x  3 ubuntu ubuntu 4096 Aug 22 15:57 .c9/
    -rw-r--r--  1 ubuntu ubuntu  996 Apr 17 15:17 README.md
    -rw-r--r--  1 ubuntu ubuntu 2773 Aug 22 16:40 TerminalNotes
    drwxr-xr-x  8 ubuntu ubuntu 4096 Apr 17 15:17 client/
    drwxr-xr-x  6 ubuntu ubuntu 4096 Apr 17 15:17 node_modules/
    -rw-r--r--  1 ubuntu ubuntu  376 Apr 17 15:17 package.json
    -rw-r--r--  1 ubuntu ubuntu 1931 Apr 17 15:17 server.js

19. mv = moving files or renaming files
    how is it used and a sample result:
    mv more-stuff.txt old-stuff.txt
    
20 cp - r = recursively copying files to a folder
    how is it used and a sample result:
    cp -r test/ test2/ 

21 echo = repeat in terminal
    echo "hello world!"
    
22. up and down keys = previously run commands

23. echo "this file is just a test"> old-stuff.txt
    adds txt or rewrites txt

24. echo "some more txt" >> old-stuff 
    appends txt
    
25. control c = cancels command running

26. grep = search for whats in the file
    grep "hey" old-stuff.txt
    
27. wc = word count in a file or a string

28. echo "hello world blah blah blah" | wc
    piping

29. env = lists enviornment and variables of

30. man grep

31. less

