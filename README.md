# exalen-assignment-solution

I used hashmap for solving this question.

The **hashmap** object is used to store the minimum distance from each block to the nearest required building. The blocks array represents a list of blocks on a street, each of which contains information about the buildings present at that block. The reqs array represents a list of required buildings that the user values having nearby.

The **hashmap** object is initialized with Infinity values for each required building at each block. This is because initially, the minimum distance from each block to the nearest required building is not known and is set to the highest possible value (infinity).

The for loop iterates over each block in the blocks array and updates the **hashmap** object with the minimum distance from each block to the nearest required building. If a required building is present at a block, the minimum distance is set to 0. If a required building is not present at a block, the minimum distance is set to the minimum distance of the previous block plus 1 (since the blocks are contiguous).

The second for loop iterates over the blocks in reverse order and updates the **hashmap** object with the minimum distance from each block to the nearest required building. This step is necessary because the first for loop only updates the minimum distance from each block to the nearest required building in the forward direction. The second for loop updates the minimum distance in the backward direction as well, ensuring that the minimum distance from each block to the nearest required building takes into account both the forward and backward directions.

The result array is then initialized with -Infinity values for each block. This is because initially, the maximum distance from each block to any required building is not known and is set to the lowest possible value (-infinity).

The final for loop iterates over each block and updates the result array with the maximum distance from each block to any required building. The maximum distance is calculated by taking the maximum value among the minimum distances from each block to each required building.

Finally, the function returns the index of the block in the result array that has the minimum maximum distance to any required building. This block is considered the most optimal for the user, as it minimizes the farthest distance the user would have to walk from their apartment to reach any of the required buildings.

The use of the Infinity and -Infinity values in the hashmap and result arrays is necessary because they allow the minimum and maximum distances to be accurately calculated as the loop iterates over the blocks. Without these values, it would not be possible to accurately determine the minimum and maximum distances.
