const judgeVegetable = function (vegetables, metric) {
  let highestRanking = 0;
  let submitter;
  for (let vegetable of vegetables) {
    if (vegetable[metric] > highestRanking) {
      highestRanking = vegetable[metric];
      submitter = vegetable.submitter;
    }
  }
  return submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));