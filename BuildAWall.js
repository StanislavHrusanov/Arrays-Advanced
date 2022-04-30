function buildAWall(heightOfSectionsAsArr) {
    heightOfSectionsAsArr = heightOfSectionsAsArr.map(Number);
    let concreteUsedForEverySingleDayAsArr = [];
    for (let i = 0; i < heightOfSectionsAsArr.length; i++) {
        if (heightOfSectionsAsArr[i] == 30) {
            let removed = heightOfSectionsAsArr.splice(i, 1);
            i--;
        }
    }
    while (heightOfSectionsAsArr.length > 0) {
        concreteUsedForEverySingleDayAsArr.push(heightOfSectionsAsArr.length * 195);
        for (let i = 0; i < heightOfSectionsAsArr.length; i++) {
            heightOfSectionsAsArr[i] = heightOfSectionsAsArr[i] + 1;
        }
        for (let i = 0; i < heightOfSectionsAsArr.length; i++) {
            if (heightOfSectionsAsArr[i] == 30) {
                let removed = heightOfSectionsAsArr.splice(i, 1);
                i--;
            }
        }

    }
    let totalConcrete = 0;
    for (let element of concreteUsedForEverySingleDayAsArr) {
        totalConcrete += element;
    }
    let totalConcreteInPesos = totalConcrete * 1900;

    console.log(concreteUsedForEverySingleDayAsArr.join(', '));
    console.log(`${totalConcreteInPesos} pesos`)
}
buildAWall(['17', '22', '17', '19', '17']);