function gladiatorInventory(input) {

    let inventoryAsArr = input.shift()
        .split(' ');

    for (let command of input) {
        let commandAsArr = command.split(' ');

        buyIfItemIsNotAvailableInInventory(commandAsArr, inventoryAsArr);
        trashItemIfIsAvailableInInventory(commandAsArr, inventoryAsArr);
        repairItemIfExistInInventory(commandAsArr, inventoryAsArr);
        upgradeItemIfExistInInventory(commandAsArr, inventoryAsArr);
    }
    function buyIfItemIsNotAvailableInInventory(commandAsArr, inventoryAsArr) {
        let command = commandAsArr[0];
        if (command == 'Buy') {
            let item = commandAsArr[1];
            let indexOfItem = inventoryAsArr.indexOf(item);
            if (indexOfItem == -1) {
                inventoryAsArr.push(item);
            }
        }
        return inventoryAsArr;

    }

    function trashItemIfIsAvailableInInventory(commandAsArr, inventoryAsArr) {
        let command = commandAsArr[0];
        if (command == 'Trash') {
            let item = commandAsArr[1];
            let indexOfItem = inventoryAsArr.indexOf(item);
            if (indexOfItem != -1) {
                let removed = inventoryAsArr.splice(indexOfItem, 1);
            }
        }
        return inventoryAsArr;
    }

    function repairItemIfExistInInventory(commandAsArr, inventoryAsArr) {
        let command = commandAsArr[0];
        if (command == 'Repair') {
            let item = commandAsArr[1];
            let indexOfRepair = inventoryAsArr.indexOf(item);
            if (indexOfRepair != -1) {
                let removed = inventoryAsArr.splice(indexOfRepair, 1);
                inventoryAsArr.push(removed);
            }
        }
        return inventoryAsArr;
    }

    function upgradeItemIfExistInInventory(commandAsArr, inventoryAsArr) {
        let command = commandAsArr[0];
        if (command == 'Upgrade') {
            let itemsAsArr = commandAsArr[1]
                .split('-');
            let upgradedItem = `${itemsAsArr[0]}:${itemsAsArr[1]}`;
            let indexOfItemToUpgrade = inventoryAsArr.indexOf(itemsAsArr[0]);
            if (indexOfItemToUpgrade != -1) {
                inventoryAsArr.splice(indexOfItemToUpgrade + 1, 0, upgradedItem);
            }
        }
        return inventoryAsArr;
    }
    console.log(inventoryAsArr.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
);