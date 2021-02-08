//Lemonade challenge:At a lemonade stand, each lemonade costs $5. 

Customers are standing in a queue to buy from you, and order one at a time(in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first.

Return true if and only if you can provide every customer with correct change.

function bills(arr) {
    console.log(arr)
    let count5 = 0
    let count10 = 0
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], "arr[i]")
        if (arr[i] == 5) {
            count5 += 1
        } else if (arr[i] == 10) {
            count10 += 1
        }

        if (arr[i] == 10) {
            if (count5 == 0) {
                return false
            } else {
                count5 -= 1
            }
        } else if (arr[i] == 20) {
            if (count10 >= 1 && count5 >= 1) {
                count10 -= 1
                count5 -= 1
            } else if (count5 >= 3) {
                count5 -= 3
            } else {
                return false
            }
        }
    }
    return true
}
bills([5, 5, 5, 10, 20])//true
bills([5, 5, 10, 10, 20])//false
