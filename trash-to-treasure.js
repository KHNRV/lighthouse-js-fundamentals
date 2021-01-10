const smartGarbage = function (trash, bins) {
  switch (trash) {
  case 'waste':
    bins.waste++
    break;

  case 'recycling':
    bins.recycling++
    break;
    
  case 'compost':
    bins.compost++
    break;
  }
  return bins;
}

let garbageCount = {
  waste: 0,
  recycling: 0,
  compost: 0
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));