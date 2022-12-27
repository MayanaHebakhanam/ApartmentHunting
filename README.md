# ApartmentHunting
You're looking to move into a new apartment, and you're given a list of blocks 
where each block contains an apartment that you could move into. In order to pick
your apartment, you want to optimize its location. You also have a list of requirements: 
a list of buildings that are important to you. For instance, you might value
having a school and a gym near your apartment. The list of blocks that you have contains 
information at every block about all of the buildings that are present
and absent at the block in question. For instance, for every block, you might know
whether a school, a pool, an office, and a gym are present or not. In order to
optimize your life, you want to minimize the farthest distance you'd have to walk from
your apartment to reach all of your required buildings. Write a function
that takes in a list of blocks and a list of your required buildings and that returns 
the location (the index) of the block that is most optimal for you.

Sample input:
blocks=[
{
"gym": False,
"school": True,
"store": False,
},
{
"gym": True,
"school": False,
"store": False,
},
{
"gym": True,
"school": True,
"store": False,
},
{
"gym": False,
"school": True,
"store": False,
},
{
"gym": False,
"school": True,
"store": True,
},
],
reqs=["gym","school","store"]
Sample output: 3 (at index 3, the farthest you would have to walk to reach a gym, a school, or a store, 
is 1 block; at any other index, you would have to walk farther)

Explanation:
Function apartmentHunting() returns the optimal index which ensures shortest path to reach the rquirements specified.
Two for loops are used inside one another.

for(let i=0;i<blocks.length;i++)
The first For loop is used to loop through the blocks by specifying the length of blocks.

for(let i=0;i<blocks.length;i++)
The second For loop is used to loop through the reqs list by specifying the length of reqs.

The logic here used is that we are initializing a variable count and looping through the blocks to maintain the count of the requirements of each block and stored the count details in an array carray.

Now we are checking for a condition that count value should be greater than or equal to 2 and checking that either of the two requirements must be near(gym,school,store) in order to get shortest path i.e., gym and school should be present or school or store should be present which will give a shortest path. If store and gym are present and school is absent then it will give a longest path from gym to store so i made this condition(i.e., store and gym are present) as an exception.
After this condition is met the index has been returned to the function call made(i.e., i+1 because array index starts from 0).
