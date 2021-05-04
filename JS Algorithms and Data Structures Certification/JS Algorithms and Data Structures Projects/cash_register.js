// Create an array of objects which hold the denominations and their values
const denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    const output = { status: null, change: [] };
    let change = cash - price;

    // Transform CID array into drawer object
    const register = cid.reduce(
        function(acc, curr) {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;
        },
        { total: 0 }
    );

    // Handle exact change
    if (register.total === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }

    // Handle obvious insufficient funds
    if (register.total < change) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Loop through the denomination array
    const change_arr = denom.reduce(function(acc, curr) {
        let value = 0;
        // While there is still money of this type in the drawer
        // And while the denomination is larger than the change remaining
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            // Round change to the nearest hundreth deals with precision errors
            change = Math.round(change * 100) / 100;
        }
        // Add this denomination to the output only if any was used.
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce

    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Here is your change, ma'am.
    output.status = "OPEN";
    output.change = change_arr;
    return output;
}

// test here
console.log(checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
]));



/* =============== Variation 1 =============================== */
const checkCashRegister = (price, cash, cid) => {
    const UNIT_AMOUNT = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    let totalCID = 0;
    for (let element of cid) {
        totalCID += element[1];
    }
    totalCID = totalCID.toFixed(2);  let changeToGive = cash - price;
    const changeArray = [];
    if (changeToGive > totalCID) {
        return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    } else if (changeToGive.toFixed(2) === totalCID) {
        return { status: "CLOSED", change: cid };
    } else {
        cid = cid.reverse();
        for (let elem of cid) {
            let temp = [elem[0], 0];
            while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
                temp[1] += UNIT_AMOUNT[elem[0]];
                elem[1] -= UNIT_AMOUNT[elem[0]];
                changeToGive -= UNIT_AMOUNT[elem[0]];
                changeToGive = changeToGive.toFixed(2);
            }      if (temp[1] > 0) {
                changeArray.push(temp);
            }
        }
    }  if (changeToGive > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }  return { status: "OPEN", change: changeArray};
}


/* =========================== Variation 2 ========================== */

