const Filter = (liste,condition) => {
  console.log();
  return liste.filter((elt) => elt.titre.toLowerCase().includes(condition.toLowerCase()) || elt.note.includes(condition))
}

export default Filter;
