# [16,21,11,8,12,22] -> Merge Sort

# Big-O gösterimini yazınız.

2^x = n > logn = x > O(nlogn)

# Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

* [16,21,11,8,12,22]
* [16,21,11] v [8,12,22]
* [16,21] [11] v [8,12] [22]
* [16] [21] [11] v [8] [12] [22]
* [16,21] [11] v [8,12] [22]
* [11,16,21] v [8,12,22]
* [8,11,12,16,21,22]