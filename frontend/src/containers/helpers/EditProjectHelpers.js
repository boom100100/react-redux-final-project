//manages displaying elements
//and adding divs to show store and fetch data


export const modifyElements = (project) => {
  document.getElementById('edit-project-parent').firstElementChild.style.display = 'none';
  let edit = document.getElementById('edit-project-data');
  edit.innerHTML = '';
  for (let section of project.section_titles){
    //make new div


    let parent = document.createElement('div');
    parent.id = 'edit-project-data-section-' + (section.section_order);
    let p = document.createElement('p');
    p.innerText = section.name;

    parent.appendChild(p);
    for (let data of section.section_title_children){
      let dataElement = document.createElement('div');
      dataElement.id = parent.id + '-' + data.name;
      dataElement.innerText = data.name;
      parent.appendChild(dataElement);
    }

    edit.appendChild(parent);
    //div will contain section name and child divs of data
    //add to end of edit-project-data, aka edit
    //include edit button that shows hidden edit fields
  }
}

 const onSave = () => {
  console.log('clicked save');
  //dispatch to save project data
  //in store and on server
  //on a timer:
  //project container information,
  //section_titles information,
  //section_title_children information
}

export const onDelete = () => {
    console.log('clicked delete');
    // TODO: where will delete occur?
    //dispatch to delete project data
    //in store and on server
}


export const addSectionTitle = () => {
  document.getElementById('add-new-section-title').style.display = 'block';

  document.getElementById('add-new-research').style.display = 'none';
  document.getElementById('add-new-graph').style.display = 'none';

}

export const hideNewCreators = () => {
  document.getElementById('add-new-section-title').style.display = 'none';
  document.getElementById('add-new-research').style.display = 'none';
  document.getElementById('add-new-graph').style.display = 'none';
}
export const showAddDataOptions = () => {
  document.getElementById('primary-links').style.display = 'none';
  hideNewCreators();

  document.getElementById('secondary-links').style.display = 'block';

}

export const showPrimaryOptions = () => {
  document.getElementById('primary-links').style.display = 'block';

  document.getElementById('secondary-links').style.display = 'none';
  hideNewCreators();
}

export const showResearchContainer = () => {
  hideNewCreators();
  document.getElementById('add-new-research').style.display = 'block';
}

export const addResearchData = () => {
  showResearchContainer();
  document.getElementById('add-new-research-data').style.display = 'block';

  document.getElementById('add-new-random-data').style.display = 'none';
  document.getElementById('add-new-preliminary-data').style.display = 'none';

}
export const addPreliminaryData = () => {
  showResearchContainer();
  document.getElementById('add-new-preliminary-data').style.display = 'block';

  document.getElementById('add-new-random-data').style.display = 'none';
  document.getElementById('add-new-research-data').style.display = 'none';

}
export const addRandomData = () => {
  showResearchContainer();
  document.getElementById('add-new-random-data').style.display = 'block';

  document.getElementById('add-new-preliminary-data').style.display = 'none';
  document.getElementById('add-new-research-data').style.display = 'none';

}
export const addGraph = () => {
  document.getElementById('add-new-section-title').style.display = 'none';
  document.getElementById('add-new-research').style.display = 'none';
  document.getElementById('add-new-graph').style.display = 'block';

}
