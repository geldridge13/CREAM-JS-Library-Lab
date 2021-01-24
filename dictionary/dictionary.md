Dictionary - Definition 

A dictionary is defined as a general-purpose data structure for storing a group of objects. A dictionary is associated with a set of keys and each key has a single associated value. When presented with a key, the dictionary will simply return the associated value.

For example, the results of a classroom test could be represented as a dictionary with student's names as keys and their scores as the values:

results = {'Anik' : 75,
'Aftab' :80,
'James' : 85,
'Manisha': 77,
'Suhana' :87,
'Margaret': 82}
Main operations of dictionaries
Dictionaries typically support so many operations −

retrieve a value (based on language, attempting to retrieve a missing key may provide a default value or throw an exception)

inserting or updating a value (typically, if the key does not exist in the dictionary, the key-value pair is inserted; if the key already exists, its corresponding value is overwritten with the new one)

remove or delete a key-value pair

test or verify for existence of a key

Most programming languages with dictionaries support iteration over the keys or values in a dictionary. Note that items in a dictionary are unordered, so loops over dictionaries will return items in random order.
