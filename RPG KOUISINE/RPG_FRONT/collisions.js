const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657,
      657, 657, 657, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 657, 657, 657, 657, 0, 0, 0, 0, 0, 0, 657, 
      0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 0, 0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 657, 
      0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 657, 657, 657, 657, 0, 0, 0, 0, 0, 0, 657, 0, 657, 657, 657, 0, 657, 657, 
      657, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 657, 0, 657, 657, 0, 0, 0, 0, 0, 0, 657, 0, 0, 0, 657, 0, 0, 657, 657, 0, 
      0, 0, 0, 0, 0, 657, 657, 0, 0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 0, 657, 657, 0, 0, 0, 0, 0, 657, 657, 0, 0, 0, 0, 0, 657, 
      657, 657, 657, 657, 657, 657, 0, 657, 657, 0, 0, 0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 657, 657, 0, 0, 0, 0, 0, 657, 0, 0, 0, 
      0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 0, 0, 657, 657, 0, 0, 0, 657, 657, 657, 657, 657, 657, 657, 657, 657, 657, 657, 0, 0, 
      657, 657, 657, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 0, 0, 0, 657, 657, 657, 657, 657, 657, 657, 657, 657, 0, 
      0, 0, 0, 0, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 657, 657, 657, 657, 657, 657, 657, 657, 657, 0, 0, 0, 0,
     657, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 657, 657, 657, 0, 0, 0, 0, 657, 657,
     657, 657, 657, 0, 0, 0, 0, 0, 0, 657, 657, 0, 0, 0, 0, 0, 657, 657, 0, 0, 657, 657, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 
     657, 0, 0, 0, 0, 0, 657, 657, 0, 0, 0, 0, 0, 0, 0, 657, 0, 0, 657, 0, 0, 0, 0, 0, 0, 657, 657, 657, 0, 657, 657, 0, 0, 0, 0,
     0, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 0, 657, 657, 0, 0, 0, 0, 657, 657, 657, 657, 0, 
     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 0, 0, 0, 0, 657, 0, 0, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 0, 0, 0, 0, 657, 0, 0, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
     657, 657, 0, 0, 657, 657, 0, 0, 0, 0, 657, 0, 0, 657, 657, 657, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 
     0, 0, 657, 657, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 0, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 657, 657, 657, 0, 
     0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 0, 657, 0, 0, 657, 0, 657, 0, 0, 0, 657, 0, 0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 0, 657, 0, 0, 
     0, 0, 0, 657, 657, 657, 657, 657, 0, 657, 657, 657, 657, 657, 0, 657, 657, 657, 0, 0, 657, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657,
     657, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 657, 657, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 0, 0, 657,
     657, 657, 657, 0, 0, 0, 0, 0, 657, 657, 0, 0, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 0, 657, 657, 657, 657, 0, 
     0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 0,
     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 0, 0, 0, 0, 657, 0, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 657, 657, 657, 657, 0, 657, 657, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 0, 0, 0, 0, 657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 657, 657, 
     657, 657, 657, 657, 0, 0, 0, 0, 0, 0, 0, 0]